import pokeball from "../../assets/pokeball.svg";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src={pokeball} alt="pokeball" />
      <p className="loading-p">Loading pokemons...</p>
    </div>
  );
};

export default Loading;
