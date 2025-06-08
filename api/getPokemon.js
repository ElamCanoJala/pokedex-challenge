export async function getPokemon(name) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  if (!pokemon.ok) {
    throw new Error(`Pokemon "${name}" not found`);
  }
  return pokemon.json();
}

//get 10 pokemons
export async function getFirst10Pokemons() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon list");
  }
  return response.json();
}

export async function getFirst10PokemonDetails() {
  const listResponse = await getFirst10Pokemons();
  const results = listResponse.results;

  const detailedData = await Promise.all(
    results.map((pokemon) =>
      fetch(pokemon.url).then((res) => {
        if (!res.ok)
          throw new Error(`Failed to fetch data for ${pokemon.name}`);
        return res.json();
      })
    )
  );

  return detailedData;
}
