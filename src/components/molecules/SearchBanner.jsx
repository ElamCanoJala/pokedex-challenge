import "./SearchBanner.css";

const SearchBanner = ({ onSearch }) => {
  return (
    <div className="search search-banner">
      <input
        type="text"
        placeholder="What pokemon are you looking for?"
        className="input-banner"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBanner;
