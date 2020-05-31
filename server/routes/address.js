const express = require('express')

const Address = require("../models/address");

const app = express();

app.post("/user", (req, res) => {
    let body = req.body;
  
    let address = new Address({
      street: body.street,
      state: body.state,
      city: body.city,
      country: body.country,
      zip: body.zip
      
    });
    
});

    module.exports = app;

