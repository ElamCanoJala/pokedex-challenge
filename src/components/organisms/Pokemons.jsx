import { useEffect, useState, useCallback } from "react";
import { getPokemonDetailsBatch } from "../../../api/getPokemon";
import { formatPokemonList } from "../../utils/formatPokemon";
import PokemonCard from "./PokemonCard";
import "./Pokemons.css";
import pockeball from "../../assets/pokeball.svg";
import SearchBanner from "../molecules/SearchBanner";

function Pokemons() {
  const INITIAL_LIMIT = 30;
  const LOAD_MORE_LIMIT = 25;

  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const loadPokemons = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    try {
      const limit = offset === 0 ? INITIAL_LIMIT : LOAD_MORE_LIMIT;
      const data = await getPokemonDetailsBatch(limit, offset);
      const formatted = formatPokemonList(data);
      setPokemons((prev) => [...prev, ...formatted]);
      setOffset((prev) => prev + limit);
    } catch (error) {
      console.error("Error loading pokemons:", error);
    }
    setLoading(false);
  }, [offset, loading]);

  useEffect(() => {
    loadPokemons(); //precarga de primeros 30 pokemones
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadPokemons();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadPokemons]);

  return (
    <div className="pokemons-container">
      <SearchBanner onSearch={setSearchTerm} />
      <div className="pokemons-inner-container">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.number} />
        ))}
      </div>

      <div className="loading">
        <img src={pockeball} alt="pockeball" />{" "}
        {loading && <p className="loading-p">Loading pokemons...</p>}
      </div>
    </div>
  );
}

export default Pokemons;
