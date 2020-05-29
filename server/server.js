require('./config/config');

const express = require('express');
const mongoose = require('mongoose');


const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.json({message: 'Get User from LOCAL_ENVIRONMENT'});
});

app.post('/user', (req, res) => {

    let body = req.body;

    if ( body.nombre === undefined ) {
        
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        })

    } else {

        res.json({
            persona: body
        });
    }

});

app.put('/user/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/user', (req, res) => {
    res.json({message: 'Delete User'});
});


mongoose.connect('mongodb://localhost:27017/cloudapi', (err, res) => {

    if (err)  throw err;

    console.log('Base de datos ONLINE');    

});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});