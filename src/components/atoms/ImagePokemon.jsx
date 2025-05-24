import styles from "./ImagePokemon.module.css";

function ImagePokemon(src, alt) {
  return <img src={src} alt={alt} className={styles.image} />;
}

export default ImagePokemon;
