import EvolutionCard from "./EvolutionCard";
import "./EvolutionData.css";

const EvolutionData = ({ evolutions }) => {
  return (
    <div className="evolution-container">
      <h2 className="evolution-title">Evolution chart</h2>
      <div className="evolutions">
        {evolutions.map((evolution) => {
          return <EvolutionCard pokemon={evolution} key={evolution.id} />;
        })}
      </div>
    </div>
  );
};

export default EvolutionData;
