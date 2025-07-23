import "./TypeIcon.css";

const TypeIcon = ({ img, color }) => {
  return (
    <li className="type-detail" style={{ backgroundColor: color }}>
      <img src={img} className="type-icon-detail" alt={color} />
    </li>
  );
};

export default TypeIcon;
