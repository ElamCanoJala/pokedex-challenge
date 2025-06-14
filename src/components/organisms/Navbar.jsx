import HomeButton from "../atoms/HomeButton";
import NavLink from "../atoms/NavLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HomeButton />
      <div className="nav-links">
        <NavLink link="Home" />
        <NavLink link="Types" />
        <NavLink link="Generations" />
      </div>
    </nav>
  );
};

export default Navbar;
