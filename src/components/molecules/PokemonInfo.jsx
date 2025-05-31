import PokemonHeader from "../atoms/PokemonHeader";
import PokemonType from "../atoms/PokemonType";
import styles from "./PokemonInfo.module.css";
import { getTypeStyle } from "../../utils/getTypeStyle";

function PokemonInfo({ pokemon }) {
  return (
    <div className={styles.info_box}>
      <PokemonHeader number={pokemon.number} name={pokemon.name} />
      <ul className={styles.types}>
        {pokemon.types.map((type) => {
          const { color, image } = getTypeStyle(type);
          console.log(color, image);
          return (
            <PokemonType key={type} type={type} color={color} img={image} />
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonInfo;
