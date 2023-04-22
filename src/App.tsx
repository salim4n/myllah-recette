import React from "react";
import {
	CreateRecipePage,
	GenerateRecipe,
	Home,
	UpdateRecipePage,
} from "./Pages";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./Components/Layout";
import { RecipeDetails } from "./Components";

function App() {
	return (
		<div
			className="container-fluid d-flex flex-column back-beige"
			style={{ minHeight: "100vh" }}>
			<Header />
			<div className="pt-4">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/recipeDetails" element={<RecipeDetails />}></Route>
					<Route path="/createRecipe" element={<CreateRecipePage />}></Route>
					<Route path="/updateRecipe" element={<UpdateRecipePage />}></Route>
					<Route path="/generateRecipe" element={<GenerateRecipe />}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
