import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Recipe, UpdateRecipeForm } from "..";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function UpdateRecipePage() {
	const location = useLocation();
	const recipe: Recipe = location.state.recipe;
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState<File>();
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setName(recipe.name);
		setDescription(recipe.description);
	}, [isLoading]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);

		const recipeUpdate: UpdateRecipeForm = {
			name,
			description,
			file: file!,
		};

		const formData = new FormData();

		formData.append("Name", recipeUpdate.name);
		formData.append("Description", recipeUpdate.description);
		formData.append("File", recipeUpdate.file);

		await fetch(
			`https://myllah-recipe-api.azurewebsites.net/api/Recipe/${recipe.id}`,
			{
				method: "PUT",
				body: formData,
			},
		)
			.then((response) => setIsLoading(false))
			.then((data) => navigate("/"))
			.catch((error) => console.error(error));
	};

	console.log(recipe.name);

	return (
		<div className="container pb-4">
			<div className="row pb-4">
				<h1 className="taupe">Modifier une recette</h1>
			</div>

			<form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
				<div className="d-flex align-items-center justify-content-center pb-4">
					<button
						type="submit"
						className="btn blanc back-taupe rounded-pill"
						disabled={isLoading || !name || !description || !file}>
						{isLoading ? "Modification en cours..." : "Modifier la recette"}
					</button>
				</div>
				<div className="row">
					<div className=" mb-3 col-6">
						<label htmlFor="name" className="form-label taupe">
							Nom
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
					<div className="mb-3 col-6">
						<label htmlFor="file" className="form-label taupe">
							Photo de votre recette
						</label>
						<input
							type="file"
							className="form-control"
							id="file"
							onChange={(event) => setFile(event.target.files![0])}
						/>
					</div>
				</div>

				<div className="mb-3">
					<ReactQuill
						theme="snow"
						style={{ backgroundColor: "white" }}
						id="description"
						value={description}
						onChange={setDescription}
					/>
				</div>
			</form>
		</div>
	);
}

export default UpdateRecipePage;
