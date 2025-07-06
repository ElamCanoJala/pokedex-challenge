import { useEffect, useState } from "react";
import Loading from "../atoms/Loading";
import PokemonNameButton from "../atoms/PokemonNameButton";
import "./PokemonCardGame.css";
import { fetchPokemonData } from "../../../api/fetchPokemonData";

const PokemonCardGame = ({ language, onCorrect, onWrong }) => {
  const [pokemon, setPokemon] = useState(null);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemonData(setPokemon, setOptions, setLoading, language);
  }, [language]);

  const handleClick = (name) => {
    if (name === pokemon.name) {
      onCorrect();
    } else {
      onWrong();
    }
    fetchPokemonData();
  };

  if (loading) return <Loading />;

  return (
    <div className="pokemon-card">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt="Who's that Pokémon?"
        style={{ filter: "brightness(0) contrast(0)" }}
        width="300"
      />
      <div className="options">
        {options.map((opt) => (
          <PokemonNameButton
            key={opt.id}
            onClick={() => handleClick(opt.name)}
            name={opt.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonCardGame;
