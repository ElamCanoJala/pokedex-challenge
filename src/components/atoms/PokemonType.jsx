import styles from "./PokemonType.module.css";

function PokemonType({ type, color }) {
  console.log(color, "SS");
  return <span className={`${styles.color} ${styles.span}`}>{type}</span>;
}

export default PokemonType;
