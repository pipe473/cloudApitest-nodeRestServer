const express = require("express");

const Address = require("../models/address");

const app = express();

app.post("/address", (req, res) => {
  let body = req.body;

  let address = new Address({
    street: body.street,
    state: body.state,
    city: body.city,
    country: body.country,
    zip: body.zip,
  });
  address.save((err, address) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: err,
      });
    }

    res.json({
      ok: true,
      address: address,
    });
  });
  
});

module.exports = app;
