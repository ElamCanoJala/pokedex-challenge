import "./PokemonHeader.css";

function PokemonHeader({ number, name }) {
  return (
    <div className="header">
      <p className="pokemonNumber">#{number.toString().padStart(3, "0")}</p>
      <h2 className="pokemonName">{name}</h2>
    </div>
  );
}
export default PokemonHeader;
