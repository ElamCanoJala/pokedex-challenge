import { useEffect, useState, useCallback, useRef } from "react";
import { getPokemonDetailsBatch } from "../../../api/getPokemon";
import { formatPokemonList } from "../../utils/formatPokemon";
import PokemonCard from "./PokemonCard";
import SearchBanner from "../molecules/SearchBanner";
import "./Pokemons.css";
import Loading from "../atoms/Loading";

function Pokemons() {
  const INITIAL_LIMIT = 30;
  const LOAD_MORE_LIMIT = 25;

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState("");
  const isFetchingRef = useRef(false);
  const offsetRef = useRef(0);

  const loadPokemons = useCallback(async () => {
    if (isFetchingRef.current) return;

    isFetchingRef.current = true;
    setLoading(true);

    try {
      const currentOffset = offsetRef.current;
      const limit = currentOffset === 0 ? INITIAL_LIMIT : LOAD_MORE_LIMIT;

      const data = await getPokemonDetailsBatch(limit, currentOffset);
      const formatted = formatPokemonList(data);

      setPokemons((prev) => [...prev, ...formatted]);
      offsetRef.current += limit;
    } catch (error) {
      console.error("Error loading pokemons:", error);
    }

    setLoading(false);
    isFetchingRef.current = false;
  }, []);

  //First render
  useEffect(() => {
    if (!isFetchingRef.current) {
      loadPokemons();
      isFetchingRef.current = true;
    }
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
  }, [loadPokemons]);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );
  //console.log("length", pokemons.length);
  return (
    <div className="pokemons-container">
      <SearchBanner onSearch={setSearchPokemon} />
      <div className="pokemons-inner-container">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
      {loading && <Loading />}
    </div>
  );
}

export default Pokemons;
