import "./PokemonNameButton.css";

const PokemonNameButton = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="button-name">
      {name}
    </button>
  );
};

export default PokemonNameButton;
