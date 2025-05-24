import styles from "./PokemonHeader.module.css";

function PokemonHeader({ number, name }) {
  return (
    <div className={styles.header}>
      <span className={styles.number}>
        #{number.toString().padStart(3, "0")}
      </span>
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}
export default PokemonHeader;
