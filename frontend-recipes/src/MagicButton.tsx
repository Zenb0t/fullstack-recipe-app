import { Button } from "@mui/material";
import { useAppDispatch } from "./app/hooks";
import { store } from "./app/store";
import  genRecipe  from "./fakeData";
import { addRecipe } from './features/recipeBook/RecipeSlice';

export const MagicButton = () => {

    const dispatch = useAppDispatch();

    const add = () => dispatch(addRecipe(genRecipe()));

    const action = () => console.log(store.getState().recipeBook.recipeList);

    return (
        <Button variant="contained" onClick={action}  onDoubleClick={add}      >
            Magic!
        </Button>);
}