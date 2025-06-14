import "./HomeButton.css";
import pokedex from "../../assets/pokeball.svg";

const HomeButton = () => {
  return (
    <div className="container">
      <img src={pokedex} alt="pokedex" />
      <p className="pokedex-home">Pokédex</p>
    </div>
  );
};
export default HomeButton;
