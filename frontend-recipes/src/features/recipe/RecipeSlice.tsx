import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import RecipeModel from './RecipeModel';


//TODO: Replace with real API call
//TODO: Add error handling and loading state for async actions


export interface RecipeState {
    recipelist: RecipeModel[];
    //  loading: boolean;
    //  error: string | null;
}

const initialState: RecipeState = {
    recipelist: [] as RecipeModel[],
    //  loading: false,
    //  error: null
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
        // setLoading: (state, action: PayloadAction<boolean>) => {
        //     state.loading = action.payload;
        // },
        // setError: (state, action: PayloadAction<string | null>) => {
        //     state.error = action.payload;
        // }
    },
});

export const selectRecipes = (state: RootState) => state.recipe.recipelist;

export const selectFavoriteRecipes = (state: RootState) => state.recipe.recipelist.filter(recipe => recipe.favorite);

export const { addRecipe, removeRecipe, updateRecipe, } = recipeSlice.actions;

export default recipeSlice.reducer;