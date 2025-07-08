import { useEffect, useState } from "react";
import Loading from "../atoms/Loading";
import PokemonNameButton from "../atoms/PokemonNameButton";
import "./PokemonCardGame.css";
import { fetchPokemonData } from "../../../api/fetchPokemonData";

const PokemonCardGame = ({ language, onCorrect, onWrong }) => {
  const [pokemon, setPokemon] = useState(null);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    fetchPokemonData(setPokemon, setOptions, setLoading, language);
  }, [language]);

  const handleClick = (name) => {
    if (name === pokemon.name) {
      setRevealed(true);
      onCorrect();
    } else {
      onWrong();
    }
    setTimeout(() => {
      fetchPokemonData(setPokemon, setOptions, setLoading, language);
      setRevealed(false);
    }, 1000);
  };

  //if (loading) return <Loading />;

  return (
    <>
      {loading ? (
        <div className="loading-container">
          <Loading />
        </div>
      ) : (
        <>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt="Who's that Pokémon?"
            style={{
              filter: revealed ? "none" : "brightness(0) contrast(0)",
              transition: "filter 0.5s ease",
            }}
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
        </>
      )}
    </>
  );
};
export default PokemonCardGame;
