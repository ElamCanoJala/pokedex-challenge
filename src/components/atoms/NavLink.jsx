import { Link } from "react-router-dom";
import "./NavLink.css";

const NavLink = ({ text, link }) => {
  return (
    <Link to={link} className="nav-link">
      {text}
    </Link>
  );
};

export default NavLink;
