import { Link } from "react-router-dom";
import TypeIcon from "../atoms/TypeIcon";
import "./EvolutionCard.css";
import { capitalize } from "../../utils/capitalize";
import { getTypeStyle } from "../../utils/getTypeStyle";

const EvolutionCard = ({ pokemon }) => {
  return (
    <Link to={`/pokemons/${pokemon.id}`} className="evolution-card">
      <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-img" />
      <p>{pokemon.id.toString().padStart(3, "0")}</p>
      <h4>{capitalize(pokemon.name)}</h4>
      <div className="types-card">
        {pokemon.types.map((type) => {
          const { typeColor, image } = getTypeStyle(type.type.name);
          return <TypeIcon color={typeColor} img={image} key={type.type} />;
        })}
      </div>
    </Link>
  );
};

export default EvolutionCard;
