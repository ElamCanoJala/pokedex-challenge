import { useEffect, useState } from "react";
import { getPokemonSpecies } from "../../../api/getPokemonSpecies";
import "./PokedexData.css";
import InfoLabel from "../atoms/InfoLabel";
import { capitalize } from "../../utils/capitalize";

const PokedexData = ({ pokemon }) => {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchSpecies = async () => {
      const result = await getPokemonSpecies(pokemon.species.url);
      setSpecies(result);
    };

    fetchSpecies();
  }, [pokemon.species.url]);

  console.log(species, "ASDASS");
  return (
    <>
      {species ? (
        <div className="data-container">
          <h3 className="item-title">About this pokemon</h3>
          <p>{species.description}</p>
          <InfoLabel title={"Specie"} text={species.genus} />
          <InfoLabel title={"Height"} text={`${pokemon.height * 10} cm`} />
          <InfoLabel title={"Weight"} text={`${pokemon.weight / 10} kg`} />
          <InfoLabel title={"Habitat"} text={capitalize(species.habitat)} />
        </div>
      ) : (
        <p>No data of the pokemon found</p>
      )}
    </>
  );
};

export default PokedexData;
