import Pokemons from "../components/organisms/Pokemons";
import "./Home.css";

const Home = () => {
  return (
    <div className="layout-grid">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
