import PokemonHeader from "../atoms/PokemonHeader";
import PokemonType from "../atoms/PokemonType";
import styles from "./PokemonInfo.module.css";

function PokemonInfo() {
  return (
    <div className={styles.info_box}>
      <PokemonHeader />
      <PokemonType />
    </div>
  );
}

export default PokemonInfo;
