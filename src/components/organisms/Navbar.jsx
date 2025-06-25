import "./Navbar.css";
import HomeButton from "../atoms/HomeButton";
import NavLink from "../atoms/NavLink";

const Navbar = () => {
  return (
    <nav className="header navbar">
      <HomeButton />
      <div className="nav-links">
        <NavLink text="Home" link={"/"} />
        <NavLink text="Types" link={"/types"} />
        <NavLink text="Generations" link={"/generations"} />
      </div>
    </nav>
  );
};

export default Navbar;
