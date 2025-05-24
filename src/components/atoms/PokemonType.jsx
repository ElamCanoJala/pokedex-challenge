import { capitalize } from "../../utils/capitalize";
import styles from "./PokemonType.module.css";

function PokemonType({ type, color, img }) {
  return (
    <div className={styles.type} style={{ backgroundColor: color }}>
      <img src={img} className={styles.typeImage} />
      <span className={color}>{capitalize(type)}</span>
    </div>
  );
}

export default PokemonType;
