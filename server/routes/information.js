const express = require("express");

const Information = require("../models/information");

const app = express();

app.post("/information", (req, res) => {
  let body = req.body;

  let information = new Information({
    street: body.street,
    state: body.state,
    city: body.city,
    country: body.country,
    zip: body.zip,
  });
  information.save((err, infoUser) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: err,
      });
    }

    res.status(201).json({
      ok: true,
      information: infoUser,
    });
  });
  
});

module.exports = app;
