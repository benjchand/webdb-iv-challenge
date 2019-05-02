const router = require("express").Router();

const db = require("../data/dbConfig.js");

router.get("/:id/ingredients", (req, res) => {
  db("ingredients")
    .then(ingredient => {
      res.status(200).json(ingredient);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
