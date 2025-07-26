import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/atoms/Loading";
import { getPokemonDetail } from "../../api/getPokemon";
import PokemonStatsDetail from "../components/organisms/PokemonStatsDetail";
import PokemonImageDetail from "../components/organisms/PokemonImageDetail";
import "./PokemonDetail.css";
import { getTypeStyle } from "../utils/getTypeStyle";

const PokemonDetail = () => {
  const { number } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await getPokemonDetail(number);
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon detail:", error);
      }
    };

    fetchDetail();
  }, [number]);

  if (!pokemon) return <Loading />;
  const firstType = pokemon.types[0];
  const color = firstType.type.name;
  const typeStyle = getTypeStyle(color);

  return (
    <div className="pokemon-detail">
      <PokemonStatsDetail pokemon={pokemon} />
      <PokemonImageDetail
        image={pokemon.sprites?.front_default}
        number={pokemon.id}
        name={pokemon.name}
        color={typeStyle.color}
      />
    </div>
  );
};

export default PokemonDetail;
