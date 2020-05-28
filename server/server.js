const express = require('express');
const app = express();


app.get('/user', (req, res) => {
    res.json({message: 'Get User'});
});

app.post('/user', (req, res) => {
    res.json({message: 'Post User'});
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