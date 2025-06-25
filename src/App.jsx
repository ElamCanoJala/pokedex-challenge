import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
{
  /* <div className="app_container">
      <Navbar />
      {pokemon ? <Pokemons pokemons={pokemon} /> : <p>Loading...</p>}
      <ErrorPage />
    </div>
 */
}
