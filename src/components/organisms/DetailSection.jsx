import { useEffect, useState } from "react";
import DetailNavbar from "../atoms/DetailNavbar";
import "./DetailSection.css";
import PokedexData from "../molecules/PokedexData";
import StatsData from "../molecules/StatsData";
import EvolutionData from "../molecules/EvolutionData";
import getEvolutionChain from "../../../api/getEvolutionChain";
import { getPokemonSpecies } from "../../../api/getPokemonSpecies";

const DetailSection = ({ pokemon }) => {
  const [selected, setSelected] = useState("data");
  const [species, setSpecies] = useState(null);
  const [evolutions, setEvolutions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPokemonSpecies(pokemon.species.url);
      const evolutions = await getEvolutionChain(result.evolutionsUrl);
      setSpecies(result);
      setEvolutions(evolutions);
    };

    fetchData();
  }, [pokemon.species.url]);
  return (
    <div className="detail-section">
      <DetailNavbar selected={selected} setSelected={setSelected} />
      {selected === "data" && (
        <PokedexData pokemon={pokemon} species={species} />
      )}
      {selected === "stats" && <StatsData pokemon={pokemon} />}
      {selected === "evolution" && <EvolutionData evolutions={evolutions} />}
    </div>
  );
};

export default DetailSection;
