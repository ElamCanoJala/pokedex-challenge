import "./PokemonNameButton.css";

const PokemonNameButton = ({ text, action }) => {
  return (
    <button onClick={action} className="button-name">
      {text}
    </button>
  );
};

export default PokemonNameButton;
