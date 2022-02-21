const db = require("../models");
const apiResponse = require("../helpers/apiResponse");
const Workspace = db.workspace;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Name can not be empty!" });
        return;
      }
      // Create a board
      const workspace = new Workspace({
        name: req.body.name,
        description: req.body.description,
      });
    
      // Save Tutorial in the database
      workspace
        .save(workspace)
        .then(data => {
            return apiResponse.successResponseWithData(res,"Workspace created successfully !.", data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the workspace."
          });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  console.log(title);
  var condition = title ? { name: { $regex: new RegExp(title), $options: "i" } } : {};
  Workspace.find(condition)
        .then(data => {
            return apiResponse.successResponseWithData(res, "List workspace", data)
            // res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving boards."
            });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
   const id = req.params.id;
  console.log(id);
  Board.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
