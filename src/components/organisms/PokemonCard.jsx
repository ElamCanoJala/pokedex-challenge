import "./PokemonCard.css";
import PokemonImage from "../atoms/PokemonImage";
import PokemonInfo from "../molecules/PokemonInfo";
import pattern from "../../assets/card-components/Pattern.svg";
import pokeball from "../../assets/card-components/Pokeball.svg";
import { getTypeStyle } from "../../utils/getTypeStyle";
import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const firstType = pokemon.types[0];
  const typeStyle = getTypeStyle(firstType);

  return (
    <Link
      to={`/pokemon/${pokemon.number}`}
      className="card"
      style={{ backgroundColor: typeStyle.color }}
    >
      <div className="info">
        <img src={pattern} alt="pattern" />
        <PokemonInfo pokemon={pokemon} />
      </div>

      <div className="image-container">
        <div className="bg-image-container">
          <img src={pokeball} alt="bg-pokeball" />
        </div>

        <PokemonImage image={pokemon.image} alt={pokemon.name} />
      </div>
    </Link>
  );
}

export default PokemonCard;
