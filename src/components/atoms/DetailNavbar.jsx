import "./DetailNavbar.css";
import DetailNavbarTitle from "./DetailNavbarTitle";

const DetailNavbar = ({ isSelected, setSelected }) => {
  return (
    <div className="detail-navbar">
      <DetailNavbarTitle
        isSelected={isSelected}
        setSelected={setSelected}
        text={"dATOS pOKEDEX"}
      />
      <DetailNavbarTitle isSelected={isSelected} setSelected={setSelected} />
      <DetailNavbarTitle isSelected={isSelected} setSelected={setSelected} />
    </div>
  );
};

export default DetailNavbar;
