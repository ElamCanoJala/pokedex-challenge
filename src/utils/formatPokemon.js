function formatPokemon(data) {
  return {
    number: data.id,
    name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
    image: data.sprites.other["official-artwork"].front_default,
    types: data.types.map((t) => t.type.name),
  };
}

function formatPokemonList(pokemonArray) {
  return pokemonArray.map(formatPokemon);
}

export { formatPokemon, formatPokemonList };
