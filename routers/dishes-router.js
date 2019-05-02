const router = require("express").Router();

const db = require("./all-models");

const sendUserError = (status, message, res) => {
  res.status(status).json({ error: message });
  return;
};

router.get("/", (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      sendUserError(500, err, res);
    });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    sendUserError(400, "Please provide a name for the dish", res);
    return;
  }

  db.addDish({
    name
  })
    .then(response => {
      res
        .status(201)
        .json(`The dish '${name}' has been added!  The Dish ID is ${response}`);
    })
    .catch(error => {
      console.log(error);
      sendUserError(500, error, res);
      return;
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.getDish(id)
    .then(recipes => {
      if (recipes.length === 0 || !recipes) {
        sendUserError(
          404,
          "This dish has no recipes, currently.  Try adding some!",
          res
        );
      }
      res.json(recipes);
    })
    .catch(error => {
      console.log(error);
      sendUserError(500, error, res);
      return;
    });
});

module.exports = router;
