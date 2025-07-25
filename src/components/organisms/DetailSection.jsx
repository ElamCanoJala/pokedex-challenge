import { useState } from "react";
import DetailNavbar from "../atoms/DetailNavbar";
import "./DetailSection.css";

const DetailSection = () => {
  const [selected, setSelected] = useState("data");

  return (
    <div className="detail-section">
      <DetailNavbar selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default DetailSection;
