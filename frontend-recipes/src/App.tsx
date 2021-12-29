import React from 'react';
import { RecipeForm } from './features/recipe/RecipeForm';
import './App.css';
import RecipeModel from './features/recipe/RecipeModel';
import RecipeCard from './features/recipe/RecipeCard';
import AddRecipeCard from './features/recipe/AddRecipeCard';

let imagesrc = 'https://www.eatwell101.com/wp-content/uploads/2020/02/chicken-soup-recipe-3.jpg';

function App() {
  const recipe: RecipeModel = {
    title: 'Recipe Title',
    description: 'Recipe Description',
    ingredients: 'Recipe Ingredients',
    instructions: 'Recipe Instructions',
    image: imagesrc,
  };
  
  return (
    <div className="App">
      <AddRecipeCard />
      <br></br>
      <RecipeCard recipe={recipe} />
    </div>
  );
}

export default App;
