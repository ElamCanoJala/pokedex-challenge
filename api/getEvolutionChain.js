const getEvolutionChain = async (evolutionUrl) => {
  const response = await fetch(evolutionUrl);
  const data = await response.json();

  const evolutionNames = [];
  const recursiveSearch = (node) => {
    if (!node) return;
    evolutionNames.push(node.species.name);
    if (node.evolves_to.length > 0) {
      node.evolves_to.forEach((evo) => recursiveSearch(evo));
    }
  };
  recursiveSearch(data.chain);
  const pokemons = await Promise.all(
    evolutionNames.map(async (pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await res.json();
      return {
        name: data.name,
        id: data.id,
        sprite: data.sprites.front_default,
        types: data.types,
      };
    })
  );

  return pokemons;
};

export default getEvolutionChain;
