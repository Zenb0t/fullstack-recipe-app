const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: {
        type: [String],
        required: true,
        trim: true
    },
    ingredientValueMap: {
        type: Map,
        of: Number,
        required: true,
    },
    ingredientMap: {
        type: Map,
        of: String,
        required: true,
    },
    instructions: [String],
    recipeProperties: {
        type: Map,
        of: Number,
        required: true,
    },
    imagePath: {
        type: String
    }
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;