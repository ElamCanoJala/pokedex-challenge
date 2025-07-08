import "./HomeButton.css";
import pokedex from "../../assets/pokeball.svg";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/" className="home-btn">
      <img src={pokedex} alt="home-btn" />
      <p className="pokedex-home">Pokédex</p>
    </Link>
  );
};
export default HomeButton;
