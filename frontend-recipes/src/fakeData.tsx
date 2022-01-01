import RecipeModel from "./features/recipe/RecipeModel";


export default function fakeData() {

    const imagesrc = 'https://www.eatwell101.com/wp-content/uploads/2020/02/chicken-soup-recipe-3.jpg';

}

const imagesrc = 'https://www.eatwell101.com/wp-content/uploads/2020/02/chicken-soup-recipe-3.jpg';

export const recipe: RecipeModel = {
    title: 'Recipe Title',
    description: 'Recipe Description',
    ingredients: 'Recipe Ingredients',
    instructions: 'Recipe Instructions',
    imageUrl: imagesrc,
    favorite: true,
    id: '1',
};