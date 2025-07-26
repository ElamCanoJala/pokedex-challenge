import { capitalize } from "../../utils/capitalize";
import { getTypeStyle } from "../../utils/getTypeStyle";
import StatRow from "../atoms/StatRow";
import "./StatsData.css";

const StatsData = ({ pokemon }) => {
  const { typeColor } = getTypeStyle(pokemon.types[0].type.name);
  return (
    <div className="stats-data">
      {pokemon.stats.map((stat, index) => {
        return (
          <StatRow
            label={capitalize(stat.stat.name)}
            number={stat.base_stat}
            key={index}
          />
        );
      })}
      <div className="total">
        <p className="total-label">Total</p>
        <p className="total-number" style={{ color: typeColor }}>
          {pokemon.stats.reduce((acc, num) => {
            return num.base_stat + acc;
          }, 0)}
        </p>
        <></>
      </div>
    </div>
  );
};

export default StatsData;
