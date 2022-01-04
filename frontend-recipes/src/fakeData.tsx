import RecipeModel from "./features/recipeBook/RecipeModel";
import { v4 as uuidv4 } from 'uuid';


export default function genRecipe() {
    const recipe: RecipeModel = {
        title: 'Recipe Title',
        description: description,
        ingredients: ['Ingredient1', 'Ingredient2'],
        totalTime: '1h 30min',
        instructions: ['First Step', 'Second Step', 'Third Step'],
        imageUrl: imagesrc,
        favorite: true,
        id: uuidv4(),
    };
    return recipe;

}
const description = `Bacon ipsum dolor amet rump burgdoggen bacon filet mignon, spare ribs ribeye ham meatball.
 Alcatra capicola landjaeger pork chop, filet mignon tenderloin chislic meatloaf spare ribs flank meatball. Corned beef chislic drumstick capicola sausage.`;
const imagesrc = 'https://www.eatwell101.com/wp-content/uploads/2020/02/chicken-soup-recipe-3.jpg';
