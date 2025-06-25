import "./SearchBanner.css";

const SearchBanner = () => {
  return (
    <div className="search search-banner">
      <input
        type="text"
        placeholder="What pokemon are you looking for?"
        className="input-banner"
      />
    </div>
  );
};

export default SearchBanner;
