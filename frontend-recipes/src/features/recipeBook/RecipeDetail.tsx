import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectRecipeById } from "./RecipeSlice";


export default function RecipeDetail() {

    let { recipeId } = useParams();
    console.log(`recipeId: ${recipeId}`);

    const recipe = useAppSelector((state) => selectRecipeById(state, recipeId!))

    //TODO: Breakdown into smaller components
    const RecipeTitle = () => <Typography variant="h2">{recipe?.title}</Typography>;
    const RecipeDescription = () => <Typography variant="body1">{recipe?.description}</Typography>;
    const RecipeImage = () => <img src={recipe?.imageUrl} alt={recipe?.title} width={"100%"} />;
    const RecipeTime = () => <Typography variant="body1" fontWeight={"bold"}>Total time: {recipe?.totalTime}</Typography>;

    const RecipeInstructions = () => <Box>{recipe?.instructions.map((instruction, index) => {
        return <Stack direction={"row"} spacing={2} alignItems={"center"} marginY={1}>
            <Avatar>{index + 1}</Avatar>         <Typography variant="body1">{instruction}</Typography>
        </Stack>
    })}</Box>;




    return <Paper sx={{padding: "2"}} >
        <Grid container padding={2}>
            <Grid item sm={6}>
                <RecipeTitle />
                <RecipeTime />
                <RecipeDescription />
            </Grid>
            <Grid item maxWidth={"sm"}>
                <RecipeImage />
            </Grid>
            <Grid item md={6} xs={12}>
                <RecipeInstructions />
            </Grid>
            <Grid item md={6}>
                <Typography variant="body1">{recipe?.ingredients}</Typography>
            </Grid>
            <Box>{recipe?.id}</Box>
        </Grid>
    </Paper>;
}