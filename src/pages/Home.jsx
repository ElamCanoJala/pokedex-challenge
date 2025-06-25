import { useEffect, useState } from "react";
import { getFirst10PokemonDetails } from "../../api/getPokemon";
import { formatPokemonList } from "../utils/formatPokemon";
import Pokemons from "../components/organisms/Pokemons";
import Navbar from "../components/organisms/Navbar";
import "./Home.css";
import SearchBanner from "../components/molecules/SearchBanner";

const Home = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const detailedPokemons = await getFirst10PokemonDetails();
        const formatted = formatPokemonList(detailedPokemons);
        setPokemon(formatted);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPokemons();
  }, []);
  return (
    <div className="layout-grid">
      <Navbar />
      <SearchBanner />
      <main className="main">
        {pokemon ? <Pokemons pokemons={pokemon} /> : <p>Loading...</p>}
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};

export default Home;
