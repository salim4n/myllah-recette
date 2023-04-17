import React, { useState } from "react";
import { Card } from "../Components";
import { Recipe } from "../Models";

function Home() {
	const [recipes, setRecipes] = useState<Recipe[]>([
		{
			id: 1,
			title: "Recette 1",
			description: "faites comme ceci et comme cela",
			imageUri:
				"https://th.bing.com/th/id/OIP.PnbGvvv0ZIzHyRoAL_DhcAHaHa?pid=ImgDet&rs=1",
		},
		{
			id: 2,
			title: "Recette 2",
			description: "faites comme ceci et comme cela",
			imageUri:
				"https://th.bing.com/th/id/OIP.PnbGvvv0ZIzHyRoAL_DhcAHaHa?pid=ImgDet&rs=1",
		},
		{
			id: 3,
			title: "Recette 3",
			description: "faites comme ceci et comme cela",
			imageUri:
				"https://th.bing.com/th/id/OIP.PnbGvvv0ZIzHyRoAL_DhcAHaHa?pid=ImgDet&rs=1",
		},
		{
			id: 4,
			title: "Recette 4",
			description: "faites comme ceci et comme cela",
			imageUri:
				"https://th.bing.com/th/id/OIP.PnbGvvv0ZIzHyRoAL_DhcAHaHa?pid=ImgDet&rs=1",
		},
		{
			id: 5,
			title: "Recette 5",
			description: "faites comme ceci et comme cela",
			imageUri:
				"https://th.bing.com/th/id/OIP.PnbGvvv0ZIzHyRoAL_DhcAHaHa?pid=ImgDet&rs=1",
		},
	]);

	return (
		<div className="container">
			<div className="row">
				{recipes.map((recipe) => (
					<div className="col-sm-6 col-lg-3 p-2">
						<Card recipe={recipe} key={recipe.id} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
