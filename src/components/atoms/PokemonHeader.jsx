import styles from "./PokemonHeader.module.css";

function PokemonHeader({ number, name }) {
  return (
    <div className={styles.header}>
      <p className={styles.pokemonNumber}>
        #{number.toString().padStart(3, "0")}
      </p>
      <h2 className={styles.pokemonName}>{name}</h2>
    </div>
  );
}
export default PokemonHeader;
