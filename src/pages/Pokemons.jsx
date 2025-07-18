import { useEffect, useState, useCallback, useRef } from "react";
import { getPokemonDetailsBatch } from "../../api/getPokemon";
import { formatPokemonList } from "../utils/formatPokemon";
import PokemonCard from "../components/organisms/PokemonCard";
import SearchBanner from "../components/molecules/SearchBanner";
import "./Pokemons.css";
import Loading from "../components/atoms/Loading";
import { useLoaderData } from "react-router-dom";

function Pokemons() {
  const INITIAL_LIMIT = 30;
  const LOAD_MORE_LIMIT = 25;
  const { pokemons: initialPokemons, offset: initialOffset } = useLoaderData();

  const [pokemons, setPokemons] = useState(initialPokemons);
  const [loading, setLoading] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [range, setRange] = useState({ from: 0, to: 30 });
  const isFetchingRef = useRef(false);
  const offsetRef = useRef(initialOffset);

  const loadPokemons = useCallback(async () => {
    if (isFetchingRef.current) return;

    isFetchingRef.current = true;
    setLoading(true);

    try {
      const currentOffset = offsetRef.current;
      const limit = currentOffset === 0 ? INITIAL_LIMIT : LOAD_MORE_LIMIT;

      const data = await getPokemonDetailsBatch(limit, currentOffset);
      const formatted = formatPokemonList(data);

      setPokemons((prev) => {
        const updated = [...prev, ...formatted];

        // Actualizar el rango solo si no hay búsqueda activa
        if (searchPokemon.trim() === "") {
          setRange((prevRange) => {
            const newMax = updated.length - 1;
            return {
              from: prevRange.from,
              to: Math.max(prevRange.to, newMax),
            };
          });
        }

        return updated;
      });
      offsetRef.current += limit;
    } catch (error) {
      console.error("Error loading pokemons:", error);
    }

    setLoading(false);
    isFetchingRef.current = false;
  }, []);

  //Load pokemons on scroll
  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (!loading && scrollTop + clientHeight >= scrollHeight - 100) {
        loadPokemons();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadPokemons, loading]);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  //Load pokemon on range selected
  useEffect(() => {
    if (filteredPokemons.length > 0) {
      setRange((prevRange) => {
        const max = filteredPokemons.length - 1;

        if (prevRange.to > max || prevRange.from > max) {
          return { from: 0, to: max };
        }

        return prevRange;
      });
    }
  }, [filteredPokemons]);

  const displayedPokemons = filteredPokemons.slice(range.from, range.to + 1);
  return (
    <div className="pokemons-container">
      <SearchBanner
        onSearch={setSearchPokemon}
        range={range}
        setRange={setRange}
        filteredPokemons={filteredPokemons}
      />
      <div className="pokemons-inner-container">
        {displayedPokemons.length === 0 && pokemons.length !== 0 ? (
          <p className="not-found">No pokemons found with that name</p>
        ) : (
          displayedPokemons.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))
        )}
      </div>
      {loading && <Loading />}
    </div>
  );
}

export default Pokemons;
