// 2 - links com react router
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/*<Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>*/}
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? "esta-ativo" : "esta-inativo")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        // className={({ isActive }) => (isActive ? "esta-ativo" : "esta-inativo")}
      >
        Sobre
      </NavLink>
    </nav>
  );
};

export default Navbar;
