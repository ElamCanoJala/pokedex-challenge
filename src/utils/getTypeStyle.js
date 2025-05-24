import typeStyles from "./pokemonTypeStyles";

export function getTypeStyle(type) {
  return (
    typeStyles[type] || {
      color: "#A8A77A",
      image: "/assets/types/normal.png",
    }
  );
}
