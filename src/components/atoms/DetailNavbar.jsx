import "./DetailNavbar.css";
import DetailNavbarTitle from "./DetailNavbarTitle";

const DetailNavbar = ({ selected, setSelected }) => {
  const items = [
    { key: "data", label: "Pokedex Data" },
    { key: "stats", label: "Stats" },
    { key: "evolution", label: "Evolution" },
  ];

  return (
    <div className="detail-navbar">
      {items.map(({ key, label }) => (
        <DetailNavbarTitle
          key={key}
          name={key}
          text={label}
          selected={selected === key}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};

export default DetailNavbar;
