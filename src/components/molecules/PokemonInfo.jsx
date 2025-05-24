import PokemonHeader from "../atoms/PokemonHeader";
import PokemonType from "../atoms/PokemonType";
import styles from "./PokemonInfo.module.css";

function PokemonInfo({ pokemon }) {
  return (
    <div className={styles.info_box}>
      <PokemonHeader number={pokemon.number} name={pokemon.name} />
      <PokemonType color="green" type={pokemon.types[0]} />
    </div>
  );
}

export default PokemonInfo;
