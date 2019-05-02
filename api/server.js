const express = require("express");
const helmet = require("helmet");

const dishesRouter = require("../routers/dishes-router");
const recipesRouter = require("../routers/recipes-router");
const ingredientsRouter = require("../routers/ingredients-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/dishes/", dishesRouter);
server.use("/api/recipes/", recipesRouter, ingredientsRouter);

// sanity check route
server.get("/", (req, res) => {
  res.status(200).json({ hello: "World!" });
});

module.exports = server;
