import { getRandomId } from "../src/utils/getRandomId";

export const fetchPokemonData = async (
  setPokemon,
  setOptions,
  setLoading,
  language
) => {
  setLoading(true);
  const correctId = getRandomId();

  const ids = new Set([correctId]);
  while (ids.size < 4) ids.add(getRandomId());

  const responses = await Promise.all(
    Array.from(ids).map((id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) =>
        res.json()
      )
    )
  );

  const getName = (data) => {
    const nameObj = data.names.find((n) => n.language.name === language);
    return nameObj ? nameObj.name : data.name;
  };

  const optionData = responses.map((poke) => ({
    id: poke.id,
    name: getName(poke),
  }));

  const correct = optionData.find((p) => p.id === correctId);

  setPokemon(correct);
  setOptions(optionData.sort(() => Math.random() - 0.5));
  setLoading(false);
};
