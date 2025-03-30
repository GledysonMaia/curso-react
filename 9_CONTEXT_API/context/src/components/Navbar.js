import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/info">Info</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
