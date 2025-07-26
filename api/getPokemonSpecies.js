export const getPokemonSpecies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    description: data.flavor_text_entries
      .find((entry) => entry.language.name === "en")
      ?.flavor_text.replace(/\f/g, " "),
    genus: data.genera.find((entry) => entry.language.name === "en")?.genus,
    habitat: data.habitat?.name,
    evolutionsUrl: data.evolution_chain.url,
  };
};
