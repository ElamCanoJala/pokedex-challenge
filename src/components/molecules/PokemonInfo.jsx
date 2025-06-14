import "./PokemonInfo.css";
import PokemonHeader from "../atoms/PokemonHeader";
import PokemonType from "../atoms/PokemonType";
import { getTypeStyle } from "../../utils/getTypeStyle";

function PokemonInfo({ pokemon }) {
  return (
    <div className="info_box">
      <PokemonHeader number={pokemon.number} name={pokemon.name} />
      <ul className="types">
        {pokemon.types.map((type) => {
          const { typeColor, image } = getTypeStyle(type);
          return (
            <PokemonType key={type} type={type} color={typeColor} img={image} />
          );
        })}
      </ul>
    </div>
  );
}

export default PokemonInfo;
