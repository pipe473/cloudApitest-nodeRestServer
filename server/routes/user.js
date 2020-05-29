const express = require("express");

const bcrypt = require('bcrypt');

const User = require("../models/user");

const app = express();

app.get("/user", (req, res) => {
  res.json({ message: "Get User from LOCAL_ENVIRONMENT" });
});

app.post("/user", (req, res) => {
  let body = req.body;

  let user = new User({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: err,
      });
    }

    res.json({
      ok: true,
      user: userDB,
    });
  });
});

app.put("/user/:id", (req, res) => {

  let id = req.params.id;
  let body = req.body;

  User.findByIdAndUpdate( id, body, {new: true}, (err, userDB) => {
    if (err) {
        return res.status(400).json({
          ok: false,
          err: err,
        });
    }      
    
        res.status(200).json({
          ok: true,
          user: userDB
        });
  })

});

app.delete("/user", (req, res) => {
  res.json({ message: "Delete User" });
});

module.exports = app;
