import "./SearchBanner.css";

const SearchBanner = ({ onSearch, range, filteredPokemons, setRange }) => {
  return (
    <div className="search search-banner">
      <input
        type="text"
        placeholder="What pokemon are you looking for?"
        className="input-banner"
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="range-controls">
        <label className="range-labels">
          From: {range.from}
          <input
            type="range"
            min={0}
            max={filteredPokemons.length - 1}
            value={range.from}
            onChange={(e) =>
              setRange((prev) => ({
                ...prev,
                from: Math.min(Number(e.target.value), prev.to - 1),
              }))
            }
          />
        </label>
        <label className="range-labels">
          To: {range.to}
          <input
            type="range"
            min={0}
            max={filteredPokemons.length - 1}
            value={range.to}
            onChange={(e) =>
              setRange((prev) => ({
                ...prev,
                to: Math.max(Number(e.target.value), prev.from + 1),
              }))
            }
          />
        </label>
      </div>
    </div>
  );
};

export default SearchBanner;
