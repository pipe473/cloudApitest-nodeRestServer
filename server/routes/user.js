const express = require("express");

const bcrypt = require("bcrypt");
const _ = require("underscore");

const User = require("../models/user");
const Adress = require("../models/address");

const app = express();


app.get("/users", (req, res) => {
  let desde = req.query.desde || 0;
  desde = Number(desde);
  
  let limite = req.query.limite || 5;
  limite = Number(limite);
  
  User.find({}, "nombre email birthDate")
  .skip(desde)
  .limit(limite)
  .exec((err, users) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: err,
      });
    }
    
    User.countDocuments({}, (err, conteo) => {
      res.json({
        ok: true,
        users,
        cuantos: conteo,
      });
    });
  });
});

app.get("/user/:id", (req, res) => {
  let ide = req.params.id;
  console.log(ide);
  
  // Adress.findById({ _id:ide }, function (err, address) {
  //   // console.log(err);      
  //   User.populate(address, { path: "address" }, function (err, address) {
      
  //     res.status(200).send(address);
      
  //   });
  // });
  User.findById({_id:ide })
  .populate('address')
  .exec( (err, populate) => {
        if (err) {
              return res.status(400).json({
                  ok: false,
                  err: err
                });
              }
        
              console.log(populate);

               return res.status(200).json({
             populate});
  });
});
app.post("/user", (req, res) => {
  let body = req.body;
  
  let user = new User({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    birthDate: body.birthDate,
    address: body.address,
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
  let body = _.pick(req.body, ["nombre", "email", "birthDate"]);
  
  User.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, userDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err: err,
        });
      }
      
      res.status(200).json({
        ok: true,
        user: userDB,
      });
    });
  });
  // mongoose.set('debug', true);

app.delete("/user/:id", function (req, res) {
  let id = req.params.id;

  User.findByIdAndRemove(id, (err, userDeleted) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err: err,
      });
    }

    if (userDeleted === null) {
      return res.status(404).json({
        ok: false,
        err: {
          message: "Usuario no encontrado",
        },
      });
    }

    res.json({
      ok: true,
      user: userDeleted,
    });
  });
});

module.exports = app;
