import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<nav className="navbar sticky-top navbar-light  back-taupe rounded-pill pt-4">
			<NavLink className="nav-link  p-2 " aria-current="page" to="/">
				<button className="btn btn-lg hoverable back-blanc rounded-pill">
					{" "}
					<h3 className="taupe ">Myllah-Recettes</h3>
				</button>
			</NavLink>
			<NavLink
				className="nav-link  p-2 "
				aria-current="page"
				to="/createRecipe">
				<button className="btn btn-lg hoverable back-blanc rounded-pill">
					{" "}
					<h3 className="taupe ">Créer une Recette</h3>
				</button>
			</NavLink>
		</nav>
	);
}

export default Header;
