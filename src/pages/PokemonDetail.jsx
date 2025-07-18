import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/atoms/Loading";
import { getPokemonDetail } from "../../api/getPokemon";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getPokemonDetail(name);
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon detail:", error);
      }
    };

    fetchDetail();
  }, [name]);

  if (!pokemon) return <Loading />;

  return (
    <div className="pokemon-detail">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonDetail;
