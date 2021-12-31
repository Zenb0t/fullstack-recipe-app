import { Grid } from "@mui/material";
import AddRecipeCard from "./AddRecipeCard";
import RecipeCard from "./RecipeCard";
import RecipeModel from "./RecipeModel";


export default function RecipeCardList(props: { recipes: RecipeModel[] }) {

    const recipes = props.recipes;

    return (
        <Grid container spacing={2}>
            <Grid minWidth={"200px"} item xl={2}>
                <AddRecipeCard />
            </Grid>
            {recipes.map((recipe) => (
                <Grid minWidth={"200px"} item xl={2}>
                    <RecipeCard key={recipe.title} recipe={recipe} />
                </Grid>
            ))}
        </Grid>
    );





}