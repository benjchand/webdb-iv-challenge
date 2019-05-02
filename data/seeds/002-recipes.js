exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Fish Tacos", dish_id: "1" },
        { name: "Classic Tacos", dish_id: "1" },
        { name: "Spaghetti with Meatballs", dish_id: "2" },
        { name: "Lasagna", dish_id: "2" },
        { name: "Tortellini", dish_id: "2" },
        { name: "Reverse Sear", dish_id: "3" },
        { name: "Steak Tartare", dish_id: "3" }
      ]);
    });
};
