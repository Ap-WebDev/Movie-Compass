import Logo from "../assets/logo.png";
import { FaHome, FaSearch, FaFilm, FaFire } from "react-icons/fa";
import { IoIosTv } from "react-icons/io";
import { Link } from "react-router-dom";

const NavLink = ({ to, children, Icon }) => (
  <Link to={to}>
    <span className="Icons-Nav">
      <Icon />
    </span>
    <span className="Link-Name">{children}</span>
  </Link>
);

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div>
        <NavLink to="/trending" Icon={FaFire}>Trending</NavLink>
        <NavLink to="/search" Icon={FaSearch}>Search</NavLink>
        <NavLink to="/" Icon={FaHome}>Home</NavLink>
        <NavLink to="/tv" Icon={IoIosTv}>TV</NavLink>
        <NavLink to="/movies" Icon={FaFilm}>Movies</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
