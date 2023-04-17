import { configureStore } from "@reduxjs/toolkit";
import { recipesReducer } from "./RecipeSlice";
import { RecipeApi } from "../../Api";

const store = configureStore({
	reducer: {
		recipesStore: recipesReducer,
		[RecipeApi.reducerPath]: RecipeApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(RecipeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
