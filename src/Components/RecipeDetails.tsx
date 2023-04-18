import React from "react";
import { useLocation } from "react-router-dom";
import { Recipe } from "../Models";

function RecipeDetails() {
	const location = useLocation();
	const recipe: Recipe = location.state.recipe;

	return (
		<div className="container pt-4 pt-md-5">
			<div className="row text-center">
				<h1 className=" taupe">{recipe.name}</h1>
			</div>
			<div className="row">
				<div className="col-7">
					<div className="list-group back-taupe text-center">
						<span className="list-unlisted">
							<h3 className="blanc">Description</h3>
						</span>
						<p className="blanc">{recipe.description}</p>
					</div>
					<br />
				</div>
				<div className="col-5">
					<img
						src={recipe.imageUri}
						width="100%"
						style={{ borderRadius: "50%" }}
						alt=""></img>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
