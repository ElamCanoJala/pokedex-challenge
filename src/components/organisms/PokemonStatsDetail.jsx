import { capitalize } from "../../utils/capitalize";
import { getTypeStyle } from "../../utils/getTypeStyle";
import TypeIcon from "../atoms/TypeIcon";
import DetailSection from "./DetailSection";
import "./PokemonStats.css";

const PokemonStatsDetail = ({ pokemon }) => {
  return (
    <div className="stats-container">
      <h3 className="poke-number">#{pokemon.id.toString().padStart(3, "0")}</h3>
      <h1 className="poke-name">{capitalize(pokemon.name)}</h1>
      <ul className="types-list">
        {pokemon.types.map((element, index) => {
          const { typeColor, image } = getTypeStyle(element.type.name);
          return <TypeIcon color={typeColor} img={image} key={index} />;
        })}
      </ul>
      <DetailSection pokemon={pokemon} />
    </div>
  );
};

export default PokemonStatsDetail;
