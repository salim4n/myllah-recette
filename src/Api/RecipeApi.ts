import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const RecipeApi = createApi({
	reducerPath: "recipeApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://myllah-recipe-api.azurewebsites.net/api/",
	}),
	tagTypes: ["Recipes"],
	endpoints: (builder) => ({
		getRecipes: builder.query({
			query: () => ({
				url: "Recipe",
			}),
			providesTags: ["Recipes"],
		}),
		getRecipeById: builder.query({
			query: (id) => ({
				url: `Recipe/${id}`,
			}),
			providesTags: ["Recipes"],
		}),
	}),
});

export const { useGetRecipesQuery, useGetRecipeByIdQuery } = RecipeApi;
export default RecipeApi;
