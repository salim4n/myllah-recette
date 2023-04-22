import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar sticky-top navbar-light  back-taupe rounded-pill pt-4">
			<NavLink className="nav-link  p-2 " aria-current="page" to="/">
				<h3 className="blanc hoverable">Myllah-Recettes</h3>
			</NavLink>
		</nav>
	);
}

export default Header;
