import "./DetailNavbarTitle.css";

const DetailNavbarTitle = ({ name, text, selected, setSelected }) => {
  function handleClick() {
    setSelected(name);
  }

  return (
    <button
      className={`title-navbar ${selected ? "selectedTitle" : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default DetailNavbarTitle;
