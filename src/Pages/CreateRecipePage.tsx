import React, { useState } from "react";
import { CreateRecipeForm } from "../Models";
import { useNavigate } from "react-router-dom";

function CreateRecipePage() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState<File>();
	const [userName, setUserName] = useState("");
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		const recipe: CreateRecipeForm = {
			name,
			description,
			file: file!,
			userName,
		};

		const formData = new FormData();

		formData.append("Name", recipe.name);
		formData.append("Description", recipe.description);
		formData.append("File", recipe.file);
		formData.append("UserName", recipe.userName);

		await fetch("https://myllah-recipe-api.azurewebsites.net/api/Recipe", {
			method: "POST",
			body: formData,
		})
			.then((response) => setIsLoading(false))
			.then((data) => navigate("/"))
			.catch((error) => console.error(error));
	};

	return (
		<div>
			<h1 className="taupe">Créer une nouvelle recette</h1>
			<form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
				<div className="mb-3">
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
				<div className="mb-3">
					<label htmlFor="description" className="form-label taupe">
						Description
					</label>
					<textarea
						className="form-control"
						id="description"
						rows={3}
						value={description}
						onChange={(event) => setDescription(event.target.value)}></textarea>
				</div>
				<div className="mb-3">
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
				<div className="mb-3">
					<label htmlFor="userName" className="form-label taupe">
						User name
					</label>
					<input
						type="text"
						className="form-control"
						id="userName"
						value={userName}
						onChange={(event) => setUserName(event.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-lght taupe form-control"
					disabled={isLoading || !name || !description || !file || !userName}>
					{isLoading ? "Création en cours..." : "Créer la recette"}
				</button>
			</form>
		</div>
	);
}

export default CreateRecipePage;
