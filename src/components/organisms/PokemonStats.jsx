import { getTypeStyle } from "../../utils/getTypeStyle";
import TypeIcon from "../atoms/TypeIcon";
import "./PokemonStats.css";

const PokemonStats = ({ pokemon }) => {
  return (
    <div className="stats-container">
      <h3 className="poke-number">#{pokemon.id.toString().padStart(3, "0")}</h3>
      <h1 className="poke-name">{pokemon.name}</h1>
      <ul className="types-list">
        {pokemon.types.map((element) => {
          const { typeColor, image } = getTypeStyle(element.type.name);
          return <TypeIcon color={typeColor} img={image} key={element.type} />;
        })}
      </ul>
    </div>
  );
};

export default PokemonStats;
