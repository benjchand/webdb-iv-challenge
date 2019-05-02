const db = require("../data/dbConfig.js");

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  getRecipe,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function getDish(dishId) {
  return db("recipes as r")
    .join("dishes as d", "d.id", "r.dish_id")
    .select("r.id", "r.name", "d.name as dishName")
    .where("r.dish_id", dishId);
}

function addDish(dish) {
  return db("dishes")
    .insert(dish, "id")
    .then(([id]) => {
      return getDish(id);
    });
}

function getRecipes(id) {
  return db("recipes");
}

function getRecipe(id) {
  return db("ingredients as i")
    .join("recipes as r", "r.id", "i.recipe_id")
    .select("i.id", "i.ingredients", "r.name as recipeName")
    .where("i.recipe_id", id);
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(([id]) => {
      return getRecipe(id);
    });
}
