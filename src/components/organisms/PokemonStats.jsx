import "./PokemonStats.css";
const PokemonStats = ({ pokemon }) => {
  return (
    <div className="stats-container">
      <h3>#{pokemon.id.toString().padStart(3, "0")}</h3>
      <h1>{pokemon.name}</h1>
      <div></div>
    </div>
  );
};

export default PokemonStats;
