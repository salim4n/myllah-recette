import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { recipesReducer } from "./RecipeSlice";

const store = configureStore({
	reducer: {
		recipesStore: recipesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	//.concat(objectApi.middleware) for each
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
