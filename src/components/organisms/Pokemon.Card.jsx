import PokemonImage from "../atoms/PokemonImage";
import PokemonInfo from "../molecules/PokemonInfo";
import styles from "./PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  return (
    <div className={styles.card}>
      <PokemonInfo pokemon={pokemon} />
      <div className={styles.image_container}>
        <PokemonImage image={pokemon.image} alt={pokemon.name} />
      </div>
    </div>
  );
}

export default PokemonCard;
