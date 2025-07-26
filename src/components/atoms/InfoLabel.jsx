import "./InfoLabel.css";
const InfoLabel = ({ title, text }) => {
  return (
    <div className="info-container">
      <p className="info-title">{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default InfoLabel;
