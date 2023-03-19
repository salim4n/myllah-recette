import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	recipes: [],
};

export const recipesSlice = createSlice({
	name: "recipes",
	initialState: initialState,
	reducers: {
		setRecipes: (state, action) => {
			state.recipes = action.payload;
		},
	},
});

export const { setRecipes } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
