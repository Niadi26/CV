import { NavLink } from "react-router-dom";

export function Navigation() {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/skills'>Skills</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                    </li>
                <li>
                    <NavLink to='/contacts'>Contacts</NavLink>
                </li>
            </ul>
        </nav>
    )
}