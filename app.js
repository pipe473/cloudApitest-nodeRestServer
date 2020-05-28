const express = require('express');

const app = express();

// This endpoint is for request
app.get('/', (req, res) => {
  res
    .status(404)
    .json({message:'Hello from my custom server side', app:'CloudApi'});
});

app.post('/', (req, res) => {
  res.send('You can post something to this endpoint...');
})

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

