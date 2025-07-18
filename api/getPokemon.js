export async function getPokemons(limit = 25, offset = 0) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon list");
  }
  return response.json();
}

export async function getPokemonDetailsBatch(limit = 25, offset = 0) {
  const listResponse = await getPokemons(limit, offset);
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

export async function getPokemonDetail(identifier) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${identifier.toString().toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error(`Pokémon "${identifier}" no encontrado`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getPokemonDetail error:", error);
    throw error;
  }
}
