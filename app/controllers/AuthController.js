const db = require("../models");
const apiResponse = require("../helpers/apiResponse");
const bcrypt = require('bcrypt');
const User = db.user;

// Create and Save a new Tutorial
exports.login = (req, res) => {
    // Validate request
    if (!req.body.email) {
        res.status(400).send({ message: "Email can not be empty!" });
        return;
      }

      if (!req.body.password) {
        res.status(400).send({ message: "Password can not be empty!" });
        return;
      }

        User.findOne({email: req.body.email }, (err, user) => {
            if(user == null) {
                return apiResponse.notFoundResponse(res, "User not found !.");
            }
            if(bcrypt.compareSync(req.body.password, user.password)) {
                return apiResponse.successResponseWithData(res, "Login successfully !", user)
            } else {
                return apiResponse.ErrorResponse(res, "Email or password is incorrect !");
            }
        })
    // Save Tutorial in the database
};

exports.signUp = (req, res) => {
     // Validate request
      if (!req.body.username) {
        res.status(400).send({ message: "Username can not be empty!" });
        return;
      }

      if (!req.body.email) {
        res.status(400).send({ message: "email can not be empty!" });
        return;
      }

      if (!req.body.password) {
        res.status(400).send({ message: "Password can not be empty!" });
        return;
      }
      const user = new User({
        username: req.body.username,
        email: req.body.email,
      })

    // hash password
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(req.body.password, salt);

      // Save user in the database
      user
        .save()
        .then(data => {
          return apiResponse.successResponseWithData(res,"User created successfully !.", data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the board."
          });
    });
};
