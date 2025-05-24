import styles from "./PokemonHeader.module.css";

function PokemonHeader({ id, name }) {
  return (
    <div className={styles.header_box}>
      <span className={styles.number}>#{id.toString().padStart(3, "0")}</span>
      <h2 className={styles.name}>{name}</h2>
    </div>
  );
}
export default PokemonHeader;
