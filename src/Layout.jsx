import { Outlet } from "react-router-dom";
import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/atoms/Footer.jsx";
import "./Layout.css";

const Layout = () => {
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

export default Layout;
