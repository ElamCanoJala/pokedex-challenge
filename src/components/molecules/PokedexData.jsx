import "./PokedexData.css";
import InfoLabel from "../atoms/InfoLabel";
import { capitalize } from "../../utils/capitalize";
import { getTypeStyle } from "../../utils/getTypeStyle";

const PokedexData = ({ pokemon, species }) => {
  console.log(pokemon, "ASA");
  const { typeColor } = getTypeStyle(pokemon.types[0].type.name);
  return (
    <>
      {species ? (
        <div className="data-container">
          <h3 style={{ color: typeColor, fontWeight: "bold" }}>
            About this pokemon
          </h3>
          <p>{species.description}</p>
          <InfoLabel title={"Species"} text={species.genus} />
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
