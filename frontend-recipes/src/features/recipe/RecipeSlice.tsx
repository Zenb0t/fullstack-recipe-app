import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import RecipeModel from './RecipeModel';


//TODO: Replace with real API call
//TODO: Add error handling and loading state for async actions


export interface RecipeState {
    recipelist: RecipeModel[];
}

const initialState: RecipeState = {
    recipelist: [] as RecipeModel[], // will be initialized from async external API call.
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        addRecipe: (state, action: PayloadAction<RecipeModel>) => {
            state.recipelist.push(action.payload);
        },
        removeRecipe: (state, action: PayloadAction<RecipeModel>) => {
            state.recipelist = state.recipelist.filter(recipe => recipe.id !== action.payload.id);
        },
        updateRecipe: (state, action: PayloadAction<RecipeModel>) => {
            const recipe = state.recipelist.find(recipe => recipe.id === action.payload.id);
            if (recipe) {
                Object.assign(recipe, action.payload);
            }
        },
    },
});

export const selectRecipes = (state: RootState) => state.recipe.recipelist;

export const selectFavoriteRecipes = (state: RootState) => state.recipe.recipelist.filter(recipe => recipe.favorite);

export const { addRecipe, removeRecipe, updateRecipe, } = recipeSlice.actions;

export default recipeSlice.reducer;