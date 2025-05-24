import styles from "./PokemonImage.module.css";

function PokemonImage({ image, alt }) {
  return <img src={image} alt={alt} className={styles.image} />;
}

export default PokemonImage;
