import styles from "./PokemonHeader.module.css";
import PokemonNumber from "../atoms/PokemonNumber";
import Title from "../atoms/Title";

function PokemonHeader({ number, name }) {
  return (
    <div className={styles.header}>
      <PokemonNumber number={number} style={"pokemonCard"} />
      <Title title={name} style={"pokemonCard"} />
    </div>
  );
}
export default PokemonHeader;
