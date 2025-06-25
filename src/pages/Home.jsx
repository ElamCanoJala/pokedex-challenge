import { useEffect, useState } from "react";
import { getFirst10PokemonDetails } from "../../api/getPokemon";
import { formatPokemonList } from "../utils/formatPokemon";
import Pokemons from "../components/organisms/Pokemons";
import Navbar from "../components/organisms/Navbar";
import "./Home.css";

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
      <header className="header">
        <Navbar />
      </header>

      <main className="main">
        {pokemon ? <Pokemons pokemons={pokemon} /> : <p>Loading...</p>}
      </main>

      <aside className="sidebar">sidebar</aside>

      <footer className="footer">footer</footer>
    </div>
  );
};

export default Home;
