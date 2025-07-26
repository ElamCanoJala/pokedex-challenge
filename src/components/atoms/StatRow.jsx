import "./StatRow.css";

const StatRow = ({ label, number }) => {
  return (
    <div className="stat-row">
      <p className="stat-label">{label}</p>
      <p className="stat-number">{number}</p>
      <div className="percentage-bar">
        <div className="percentage-fill" style={{ width: `${number}%` }}></div>
      </div>
    </div>
  );
};

export default StatRow;
