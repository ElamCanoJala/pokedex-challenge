import "./PokemonImage.css";

function PokemonImage({ image, alt }) {
  return <img src={image} alt={alt} className="image" />;
}

export default PokemonImage;
