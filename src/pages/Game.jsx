import { useState } from "react";
import Navbar from "../components/organisms/Navbar";
import "./Game.css";
import PokemonCardGame from "../components/organisms/PokemonCardGame";
import ScoreModal from "../components/organisms/ScoreModal";
import LanguageSelector from "../components/molecules/LanguageSelector";

const Game = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleCorrect = () => {
    setScore((prev) => prev + 1);
    setTries(0);
  };

  const handleWrong = () => {
    setTries((prev) => {
      const next = prev + 1;
      if (next >= 3) setShowScore(true);
      return next;
    });
  };

  const resetGame = () => {
    setScore(0);
    setTries(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      <Navbar />
      <LanguageSelector
        selectedLang={selectedLang}
        onSelect={setSelectedLang}
      />
      <PokemonCardGame
        language={selectedLang}
        onCorrect={handleCorrect}
        onWrong={handleWrong}
      />
      {showScore && <ScoreModal score={score} onRestart={resetGame} />}
    </div>
  );
};

export default Game;
