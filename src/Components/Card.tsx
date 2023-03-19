import React from "react";

import { Recipe } from "../Models";

function Card({ recipe }: { recipe: Recipe }) {
	return (
		<div className="card " style={{ width: "18rem" }}>
			<img src={recipe.image} className="card-img-top" alt="..." />
			<div className="card-body back-taupe">
				<h5 className="card-title">{recipe.title}</h5>
			</div>
		</div>
	);
}

export default Card;
