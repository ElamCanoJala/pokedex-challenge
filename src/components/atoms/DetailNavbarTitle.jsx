import "./DetailNavbarTitle.css";
const DetailNavbarTitle = ({ text, isSelected, setSelected }) => {
  return (
    <p
      className={`${isSelected && "selectedTitle"} title-navbar`}
      onClick={setSelected}
    >
      {text}
    </p>
  );
};

export default DetailNavbarTitle;
