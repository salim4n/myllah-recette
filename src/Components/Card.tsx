import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Recipe } from "../Models";

function Card({ recipe }: { recipe: Recipe }) {
	const navigate = useNavigate();

	const handleClick = () => {
		console.log("lets go");
		console.log(recipe.title);
		navigate("/recipeDetails", { state: { recipe: recipe } });
	};

	return (
		<span onClick={handleClick}>
			<div className="card " style={{ width: "18rem" }}>
				<img src={recipe.image} className="card-img-top" alt="..." />
				<div className="card-body back-taupe rounded-bottom">
					<div className="text-center">
						<h5 className="card-title">{recipe.title}</h5>
					</div>
				</div>
			</div>
		</span>
	);
}

export default Card;
