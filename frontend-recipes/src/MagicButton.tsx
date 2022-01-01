

import { Button } from "@mui/material";
import { useAppDispatch } from "./app/hooks";
import { store } from "./app/store";
import { recipe } from "./fakeData";
import { addRecipe } from './features/recipe/RecipeSlice';

export const MagicButton = () => {

    const action = () => console.log(store.getState().recipe.recipelist);

    const dispatch = useAppDispatch();

    const add = () => dispatch(addRecipe(recipe));

    return (
        <Button onClick={action}  onDoubleClick={add}      >
            Magic!
        </Button>);
}