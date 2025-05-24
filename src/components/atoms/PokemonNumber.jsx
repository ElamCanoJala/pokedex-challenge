import styles from "./PokemonNumber.module.css";

function PokemonNumber({ number, style }) {
  return (
    <span className={styles[style]}>#{number.toString().padStart(3, "0")}</span>
  );
}

export default PokemonNumber;
