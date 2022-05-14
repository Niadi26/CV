import { NavLink } from "react-router-dom";
import './navigation.css';

export function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/">About</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
