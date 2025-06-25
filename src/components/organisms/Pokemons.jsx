import "./Pokemons.css";
import PokemonCard from "./PokemonCard";

function Pokemons({ pokemons }) {
  return (
    <div className="pokemons-container">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

export default Pokemons;
