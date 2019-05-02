exports.up = function(knex, Promise) {
  // the tables most be created in the right order,
  // tables with FK are created after the referenced table is created
  return knex.schema
    .createTable("dishes", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();
    })
    .createTable("recipes", tbl => {
      // the tracks table must be created before this table is created
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("dishes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", tbl => {
      tbl.increments();

      tbl.string("ingredients", 256).notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  // tables with FK must be removed before the referenced table is removed
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("dishes");
};
