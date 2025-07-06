import en from "../../assets/en.png";
import ja from "../../assets/jp.svg";
import sp from "../../assets/sp.png";
import "./LanguageSelector.css";

const languages = [
  { code: "sp", flag: sp },
  { code: "en", flag: en },
  { code: "ja", flag: ja },
];

const LanguageSelector = ({ selectedLang, onSelect }) => {
  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <img
          key={lang.code}
          src={lang.flag}
          alt={lang.code}
          onClick={() => onSelect(lang.code)}
          style={{
            margin: 5,
            cursor: "pointer",
            opacity: selectedLang === lang.code ? 1 : 0.4,
            border: selectedLang === lang.code ? "2px solid #333" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;
