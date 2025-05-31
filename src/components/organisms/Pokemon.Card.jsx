import PokemonImage from "../atoms/PokemonImage";
import PokemonInfo from "../molecules/PokemonInfo";
import styles from "./PokemonCard.module.css";
import pattern from "../../assets/card-components/Pattern.svg";
import pokeball from "../../assets/card-components/Pokeball.svg";

function PokemonCard({ pokemon }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <img src={pattern} />
        <PokemonInfo pokemon={pokemon} />
      </div>

      <div className={styles.image_container}>
        <img src={pokeball} className={styles.bg_image} />
        <PokemonImage image={pokemon.image} alt={pokemon.name} />
      </div>
    </div>
  );
}

export default PokemonCard;
