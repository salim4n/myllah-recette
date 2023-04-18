import React, { useEffect, useState } from "react";
import { Card, Loader } from "../Components";
import { Recipe } from "../Models";
import { useGetRecipesQuery } from "../Api/RecipeApi";
import { useDispatch } from "react-redux";
import { setRecipes } from "../Storage/Redux/RecipeSlice";

function Home() {
	const { data, isLoading } = useGetRecipesQuery(null);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isLoading) {
			dispatch(setRecipes(data));
		}
	}, [isLoading]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="container">
			<div className="row pb-4 pt-4">
				{data != null ? (
					data.length > 0 &&
					data.map((recipe: Recipe, index: number) => (
						<div className="col-sm-6 col-lg-3 p-2">
							<Card recipe={recipe} key={index} />
						</div>
					))
				) : (
					<h2 className="text-center taupe">Aucune Recettes</h2>
				)}
				{}
			</div>
		</div>
	);
}

export default Home;
