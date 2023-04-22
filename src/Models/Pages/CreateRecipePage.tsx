import React, { useState } from "react";
import { CreateRecipeForm } from "..";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreateRecipePage() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState<File>();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsLoading(true);
		const recipe: CreateRecipeForm = {
			name,
			description,
			file: file!,
			userName: "Camille",
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
		<div className="container pb-4">
			<div className="row pb-4">
				<h1 className="taupe">Créer une nouvelle recette</h1>
			</div>

			<form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
				<div className="d-flex align-items-center justify-content-center pb-4">
					<button
						type="submit"
						className="btn blanc back-taupe rounded-pill"
						disabled={isLoading || !name || !description || !file}>
						{isLoading ? "Création en cours..." : "Créer la recette"}
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

export default CreateRecipePage;
