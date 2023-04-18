import React from "react";

function Footer() {
	return (
		<nav
			className="navbar fixed-bottom back-taupe rounded-pill pt-4"
			style={{ height: "100px" }}>
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<button className="btn btn-light taupe rounded-pill">Accueil</button>
				</a>
				<a className="navbar-brand" href="/createRecipe">
					<button className="btn btn-light taupe rounded-pill">
						Créer une recette
					</button>
				</a>
				<a className="navbar-brand" href="/">
					<button className="btn btn-light taupe rounded-pill">Accueil</button>
				</a>
				<a className="navbar-brand" href="/">
					<button className="btn btn-light taupe rounded-pill">Accueil</button>
				</a>
				<a className="navbar-brand" href="/">
					<button className="btn btn-light taupe rounded-pill">Accueil</button>
				</a>
			</div>
		</nav>
	);
}

export default Footer;
