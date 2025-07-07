import { useState } from "react";
import "./Game.css";
import PokemonCardGame from "../components/organisms/PokemonCardGame";
import LanguageSelector from "../components/molecules/LanguageSelector";
import ScoreResult from "../components/molecules/ScoreResult";

const Game = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);

  const handleCorrect = () => {
    setScore((prev) => prev + 1);
  };

  const handleWrong = () => {
    setTries((prev) => {
      const next = prev + 1;
      return next;
    });
  };

  const resetGame = () => {
    setScore(0);
    setTries(0);
  };

  return (
    <div className="game-container">
      <LanguageSelector
        selectedLang={selectedLang}
        onSelect={setSelectedLang}
      />
      {tries >= 3 ? (
        <ScoreResult score={score} onRestart={resetGame} />
      ) : (
        <PokemonCardGame
          language={selectedLang}
          onCorrect={handleCorrect}
          onWrong={handleWrong}
        />
      )}
    </div>
  );
};

export default Game;
