exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredients: "This is filler Ingredients #1", recipe_id: 1 },
        { ingredients: "This is filler Ingredients #2", recipe_id: 2 },
        { ingredients: "This is filler Ingredients #3", recipe_id: 3 },
        { ingredients: "This is filler Ingredients #4", recipe_id: 4 },
        { ingredients: "This is filler Ingredients #5", recipe_id: 5 },
        { ingredients: "This is filler Ingredients #6", recipe_id: 6 },
        { ingredients: "This is filler Ingredients #7", recipe_id: 7 }
      ]);
    });
};
