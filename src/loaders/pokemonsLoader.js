import { getPokemonDetailsBatch } from "../../api/getPokemon";
import { formatPokemonList } from "../utils/formatPokemon";

export const pokemonsLoader = async () => {
  const INITIAL_LIMIT = 30;
  const offset = 0;

  const data = await getPokemonDetailsBatch(INITIAL_LIMIT, offset);
  const formatted = formatPokemonList(data);

  return {
    pokemons: formatted,
    offset: INITIAL_LIMIT,
  };
};
