const router = require("express").Router();

const db = require("./all-models");

const sendUserError = (status, message, res) => {
  res.status(status).json({ error: message });
  return;
};

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  const { name, dish_id } = req.body;
  if (!name || !dish_id) {
    sendUserError(400, "Please provide a name and Dish_ID for the recipe", res);
    return;
  }

  db.addRecipe({
    name,
    dish_id
  })
    .then(response => {
      res.status(201).json(`The recipe for '${name}' has been added!`);
    })
    .catch(error => {
      console.log(error);
      sendUserError(500, error, res);
      return;
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getRecipe(id)
    .then(recipe => {
      if (recipe.length === 0) {
        sendUserError(404, "The Recipe could not be found.", res);
        return;
      }
      res.status(200).json(recipe);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
