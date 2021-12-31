

import { CardActionArea, CardMedia, CardContent } from '@mui/material';
import Card from '@mui/material/Card';
import React from 'react';
import RecipeModel from './RecipeModel';


export default function RecipeCard(props: { recipe: RecipeModel }) {

    const handleAction = () => {
        console.log(recipe);
    };

    let recipe = props.recipe;

    return (
        <Card sx={{ maxWidth: "345px" }}>
            <CardActionArea onClick={handleAction}>
                <CardMedia
                    component="img"
                    height="140"
                    image={recipe.imageUrl}
                    alt={recipe.title}
                />
                <CardContent>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.description}</p>
                </CardContent>
            </CardActionArea>

        </Card>
    );

}