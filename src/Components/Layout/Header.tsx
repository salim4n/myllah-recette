import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar sticky-top navbar-light  back-taupe pt-4">
			<NavLink className="nav-link  p-2 " aria-current="page" to="/">
					<h3 className="blanc ">Vision App</h3>
					<span className="badge badge-dark"><em>powered by AI</em></span>
			</NavLink>
		</nav>
	);
}

export default Header;
