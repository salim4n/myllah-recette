import React from "react";
import { useLocation } from "react-router-dom";
import { Recipe } from "../Models";

function RecipeDetails() {
	const location = useLocation();
	const recipe: Recipe = location.state.recipe;
	console.table(recipe);

	return (
		<div className="container pt-4 pt-md-5">
			<div className="row text-center">
				<h1 className=" taupe">{recipe.title}</h1>
			</div>
			<div className="row">
				<div className="col-7">
					<div className="list-group back-taupe text-center">
						<span className="list-unlisted">
							<h3 className="blanc">INGREDIENTS</h3>
						</span>
						{recipe.ingredients &&
							recipe.ingredients.map((ingredient) => (
								<span className="list-group-item back-taupe">
									<h5 className="blanc text-bold">
										<em>{ingredient}</em>
									</h5>
								</span>
							))}
					</div>
					<br />
					<div className="list-group back-taupe text-center">
						<span className="list-unlisted">
							<h3 className="blanc">INSTRUCTIONS</h3>
						</span>
						{recipe.instructions &&
							recipe.instructions.map((instruction) => (
								<span className="list-group-item list-group-item-action flex-column align-items-start back-taupe ">
									<h5 className="blanc text-bold">
										<em>{instruction}</em>
									</h5>
								</span>
							))}
					</div>
				</div>
				<div className="col-5">
					<img
						src={recipe.image}
						width="100%"
						style={{ borderRadius: "50%" }}
						alt="No content"></img>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
