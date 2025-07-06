import PokemonNameButton from "../atoms/PokemonNameButton";
import "./ScoreResult.css";

const ScoreResult = ({ score, onRestart }) => {
  return (
    <div className="score">
      <h2>Game Over!</h2>
      <p className="score-p">Score: {score}</p>
      <PokemonNameButton name="Play Again" onClick={onRestart} />
    </div>
  );
};

export default ScoreResult;
