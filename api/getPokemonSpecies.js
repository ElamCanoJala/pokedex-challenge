export async function getPokemonSpecies(speciesUrl) {
  const speciesRes = await fetch(speciesUrl);
  const speciesData = await speciesRes.json();

  const flavorText = speciesData.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );

  const genus = speciesData.genera.find(
    (entry) => entry.language.name === "en"
  );

  return {
    description: flavorText?.flavor_text.replace(/\f/, " "),
    genus: genus?.genus,
    habitat: speciesData.habitat?.name,
    color: speciesData.color.name,
  };
}
