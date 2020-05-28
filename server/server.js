require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.json({message: 'Get User'});
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

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});