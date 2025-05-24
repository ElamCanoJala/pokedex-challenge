export async function getPokemon(name) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  if (!pokemon.ok) {
    throw new Error(`Pokemon "${name}" not found`);
  }
  return pokemon.json();
}
