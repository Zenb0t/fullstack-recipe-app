import { Routes, Route } from "react-router-dom";
import RecipeCardList from "./features/recipe/RecipeCardList";
import { useAppSelector } from "./app/hooks";
import { selectRecipes, selectFavoriteRecipes } from "./features/recipe/RecipeSlice";
import App from "./App";


export default function AppRouter() {


    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/allrecipes" element={<AllRecipes />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/withEgg" element={<WithEgg />} />
            </Route>
        </Routes>);

}

const AllRecipes = () => <RecipeCardList recipes={useAppSelector(selectRecipes)} />;

const Favorites = () => <RecipeCardList recipes={useAppSelector(selectFavoriteRecipes)} />;

const WithEgg = () => <div>With Eggs</div>;
