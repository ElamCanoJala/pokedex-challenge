import "./App.css";
import { useEffect, useState } from "react";
import { getPokemon } from "../api/getPokemon.js";
import formatPokemon from "./utils/formatPokemon.js";
import PokemonCard from "./components/organisms/Pokemon.Card.jsx";

function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchBulbasaur() {
      const unformatData = await getPokemon("bulbasaur");
      const formatedData = formatPokemon(unformatData);
      setPokemon(formatedData);
    }
    fetchBulbasaur();
  }, []);

  return (
    <div className="app_container">
      {pokemon ? <PokemonCard pokemon={pokemon} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
