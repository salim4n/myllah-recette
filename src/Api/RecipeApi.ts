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
		createRecipe: builder.mutation({
			query: ({ data }) => ({
				url: "Recipe",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["Recipes"],
		}),
		updateRecipe: builder.mutation({
			query: ({ data, id }) => ({
				url: "Recipe/" + id,
				method: "PUT",
				body: data,
			}),
			invalidatesTags: ["Recipes"],
		}),
		deleteRecipe: builder.mutation({
			query: ({ id }) => ({
				url: "Recipe/" + id,
				method: "DELETE",
			}),
			invalidatesTags: ["Recipes"],
		}),
	}),
});

export const {
	useGetRecipesQuery,
	useGetRecipeByIdQuery,
	useCreateRecipeMutation,
	useUpdateRecipeMutation,
	useDeleteRecipeMutation,
} = RecipeApi;
export default RecipeApi;
