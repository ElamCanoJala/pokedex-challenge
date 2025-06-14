import "./Navbar.css";
import HomeButton from "../atoms/HomeButton";
import NavLink from "../atoms/NavLink";

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
