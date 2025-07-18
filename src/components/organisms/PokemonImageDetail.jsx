import { useNavigate } from "react-router-dom";
import ButtonAction from "../atoms/ButtonAction";
import "./PokemonImageDetail.css";
import Loading from "../atoms/Loading";

const PokemonImageDetail = ({ image, number, name, color = "#000" }) => {
  const navigate = useNavigate();
  const handlePrevClick = () => {
    navigate(`/pokemon/${number - 1}`);
  };
  const handleNextClick = () => {
    navigate(`/pokemon/${number + 1}`);
  };
  return (
    <div className="image-container-detail" style={{ backgroundColor: color }}>
      {image ? (
        <img src={image} alt={name} className="pokemon-image" />
      ) : (
        <Loading />
      )}
      <div className="btn-container">
        <ButtonAction
          text={`Previous #${number - 1}`}
          action={handlePrevClick}
          style="gray-btn"
        />
        <ButtonAction
          text={`Previous #${number + 1}`}
          action={handleNextClick}
          style="red-btn"
        />
      </div>
    </div>
  );
};

export default PokemonImageDetail;
