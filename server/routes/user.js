const express = require("express");

const bcrypt = require('bcrypt');
const _ = require('underscore');

const User = require("../models/user");

const app = express();

app.get("/user", (req, res) => {

    let desde = req.query.desde || 0;
    desde = Number(desde);

    let limite = req.query.limite || 5;
    limite = Number(limite);
        
    User.find({}, 'nombre email estado')
    .skip(desde)
    .limit(limite)
    .exec( (err, users) => {
        if (err) {
            return res.status(400).json({
              ok: false,
              err: err,
            });
          }

          User.count({}, (err, conteo) => {

              res.json({
                  ok: true,
                  users,
                  cuantos: conteo
              });
          })

    });

});

app.get("/user/:id", (req, res) => {
        let ide = req.params.id;
        console.log(ide);
        
    User.find({_id:ide})
    .populate('addres')
    .exec( (err, populate) => {
        if (err) {
            return res.status(400).json({
              ok: false,
              err: err,
            });
          }
          console.log(populate);
          

           return res.status(200).json({
               data:populate});
    });

});


app.post("/user", (req, res) => {
  let body = req.body;

  let user = new User({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    address: body.address
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
  let body = _.pick(req.body, [ 'nombre', 'email', 'estado' ]);
  

  User.findByIdAndUpdate( id, body, { new: true, runValidators: true }, (err, userDB) => {
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

app.delete("/user/:id", function(req, res) {

    let id = req.params.id;

    User.findByIdAndRemove(id, (err, userDeleted) => {

        if (err) {
            return res.status(400).json({
              ok: false,
              err: err,
            });
        }; 

        res.json({
            ok: true,
            user: userDeleted
        });

    });
  
});

module.exports = app;
