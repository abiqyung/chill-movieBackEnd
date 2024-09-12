const express = require("express");

const MovieController = require("../controller/movies.js");

const router = express.Router();

//CREATE -POST
router.post("/", MovieController.createNewMovie);

// READ - GET
router.get("/", MovieController.getAllmovies);

// UPDATE - PATCH
router.patch("/:movie_id", MovieController.updateMovie);

// DELETE - DELETE
router.delete("/:movie_id", MovieController.deleteMovie);

module.exports = router;
