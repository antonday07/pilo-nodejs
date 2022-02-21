const workspace = require('../controllers/WorkspaceController');
const express = require('express');
const router = express.Router();

// Retrieve all workspace
router.get("/", workspace.findAll);

// Create a new Tutorial
router.post("/", workspace.create);


// Retrieve all published workspace
router.get("/published", workspace.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", workspace.findOne);

// Update a Tutorial with id
router.put("/:id", workspace.update);

// Delete a Tutorial with id
router.delete("/:id", workspace.delete);

// Create a new Tutorial
router.delete("/", workspace.deleteAll);
 
module.exports = router;
