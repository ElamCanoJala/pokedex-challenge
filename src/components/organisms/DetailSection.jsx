import { useState } from "react";
import DetailNavbar from "../atoms/DetailNavbar";
import "./DetailSection.css";
import PokedexData from "../molecules/PokedexData";
import Stats from "../molecules/Stats";
import Evolution from "../molecules/Evolution";

const DetailSection = ({ pokemon }) => {
  const [selected, setSelected] = useState("data");

  return (
    <div className="detail-section">
      <DetailNavbar selected={selected} setSelected={setSelected} />
      {selected === "data" && <PokedexData pokemon={pokemon} />}
      {selected === "stats" && <Stats pokemon={pokemon} />}
      {selected === "evolution" && <Evolution pokemon={pokemon} />}
    </div>
  );
};

export default DetailSection;
