const board = require('../controllers/BoardController');
const express = require('express');
const router = express.Router();

// Retrieve all board
router.get("/", board.findAll);

// Create a new Tutorial
router.post("/", board.create);


// Retrieve all published board
router.get("/published", board.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", board.findOne);

// Update a Tutorial with id
router.put("/:id", board.update);

// Delete a Tutorial with id
router.delete("/:id", board.delete);

// Create a new Tutorial
router.delete("/", board.deleteAll);
 
module.exports = router;
