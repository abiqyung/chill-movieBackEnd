const express = require("express");

const UserController = require("../controller/users.js");

const router = express.Router();

//CREATE -POST
router.post("/", UserController.createNewUser);

// READ - GET
router.get("/", UserController.getAllusers);

// UPDATE - PATCH
router.patch("/:user_id", UserController.updateUser);

// DELETE - DELETE
router.delete("/:user_id", UserController.deleteUser);

module.exports = router;
