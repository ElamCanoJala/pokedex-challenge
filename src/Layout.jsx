import Navbar from "./components/organisms/Navbar.jsx";
import Footer from "./components/atoms/Footer.jsx";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-grid">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
