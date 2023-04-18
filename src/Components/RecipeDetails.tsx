import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Recipe } from "../Models";
import Loader from "./Loader";

function RecipeDetails() {
	const location = useLocation();
	const recipe: Recipe = location.state.recipe;
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	async function handleDelete(id: number) {
		window.alert("vous etes sure de vouloir supprimer cette recette?");
		setIsLoading(true);
		let result = await fetch(
			`https://myllah-recipe-api.azurewebsites.net/api/Recipe/${id}`,
			{
				method: "DELETE",
			},
		);
		if (result.status == 200) {
			setIsLoading(false);
			navigate("/");
		}
		setIsLoading(false);
	}

	function handleUpdate(recipe: Recipe) {
		navigate("/updateRecipe", { state: { recipe: recipe } });
	}

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="container pt-4 pt-md-5">
			<div className="row pb-4">
				<div className="col-6">
					<button
						className="btn btn-danger form-control"
						onClick={() => handleDelete(recipe.id)}>
						Supprimer
					</button>
				</div>
				<div className="col-6">
					<button
						className="btn btn-warning blanc form-control"
						onClick={() => handleUpdate(recipe)}>
						Modifier
					</button>
				</div>
			</div>
			<div className="row text-center">
				<h1 className=" taupe">{recipe.name}</h1>
			</div>
			<div className="row">
				<div className="col-7">
					<div className="list-group back-taupe text-center">
						<div
							className="blanc"
							dangerouslySetInnerHTML={{ __html: recipe.description }}></div>
					</div>
					<br />
				</div>
				<div className="col-5">
					<img
						src={recipe.imageUri}
						width="100%"
						style={{ borderRadius: "50%", height: "500px", objectFit: "cover" }}
						alt=""></img>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
