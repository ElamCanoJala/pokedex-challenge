import Pokemons from "../components/organisms/Pokemons";
import Navbar from "../components/organisms/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="layout-grid">
      <Navbar />
      <main className="main">
        <Pokemons />
      </main>
      <footer className="footer">footer</footer>
    </div>
  );
};

export default Home;
