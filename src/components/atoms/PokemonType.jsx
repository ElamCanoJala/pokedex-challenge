import styles from "./PokemonType.module.css";

function PokemonType(type, typeImage, color) {
  return (
    <div className={`${color} ${styles.span}`}>
      <img src={typeImage} alt={type} className={styles.typeImage} />
      <span>{type}</span>;
    </div>
  );
}

export default PokemonType;
