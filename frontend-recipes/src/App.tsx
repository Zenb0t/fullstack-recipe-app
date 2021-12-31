import './App.css';
import RecipeModel from './features/recipe/RecipeModel';
import SideDrawer from './app/sideMenuDrawer';
import { Box, Toolbar } from '@mui/material';
import drawerWidth from './app/sideMenuDrawer';
import RecipeCardList from './features/recipe/RecipeCardList';
import { selectRecipes } from './features/recipe/RecipeSlice';
import { useAppSelector } from './app/hooks';

let imagesrc = 'https://www.eatwell101.com/wp-content/uploads/2020/02/chicken-soup-recipe-3.jpg';

function App() {
  const recipe: RecipeModel = {
    title: 'Recipe Title',
    description: 'Recipe Description',
    ingredients: 'Recipe Ingredients',
    instructions: 'Recipe Instructions',
    imageUrl: imagesrc,
    favorite: false,
    id: '1',
  };

  const recipes = useAppSelector(selectRecipes);

  return (
    <Box sx={{ display: 'flex' }}>
      <SideDrawer />
      <Box component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <RecipeCardList recipes={recipes}/>
      </Box>
    </Box>
  );
}

export default App;
