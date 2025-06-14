import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirst10PokemonDetails } from "../api/getPokemon.js";
import { formatPokemonList } from "./utils/formatPokemon.js";
import Pokemons from "./components/organisms/Pokemons.jsx";
import Navbar from "./components/organisms/Navbar.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            pokemon ? <Pokemons pokemons={pokemon} /> : <p>Loading...</p>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  /* <div className="app_container">
      <Navbar />
      {pokemon ? <Pokemons pokemons={pokemon} /> : <p>Loading...</p>}
      <ErrorPage />
    </div>
 */
}
