import "./PokemonType.css";
import { capitalize } from "../../utils/capitalize";

function PokemonType({ type, color, img }) {
  return (
    <li className="type" style={{ backgroundColor: color }}>
      <img src={img} className="typeImage" alt={type} />
      <span className={color}>{capitalize(type)}</span>
    </li>
  );
}

export default PokemonType;
