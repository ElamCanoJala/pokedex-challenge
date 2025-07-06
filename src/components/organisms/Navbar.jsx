import "./Navbar.css";
import HomeButton from "../atoms/HomeButton";
import NavLink from "../atoms/NavLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HomeButton />
      <div className="nav-links">
        <NavLink text="Game" link={"/game"} />
        <NavLink text="Types" link={"/types"} />
        <NavLink text="Generations" link={"/generations"} />
      </div>
    </nav>
  );
};

export default Navbar;
