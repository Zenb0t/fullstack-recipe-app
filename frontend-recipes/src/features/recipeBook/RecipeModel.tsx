

export default interface RecipeModel {

    title: string;
    description: string;
    totalTime: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
    favorite: boolean;
    id: string;
}