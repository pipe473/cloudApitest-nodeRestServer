const express = require('express');
const app = express();

app.use(express.json());

// This endpoint is for request
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({message:'Hello from my custom server side', app:'CloudApi'});
// });


// // This endpoint is for post method
// app.post('/', (req, res) => {
//   res.send('You can post something to this endpoint...');
// });

app.get('', (req, res) => {
  res.status(200).json({
    status: 'success',
  })
})

app.get('/', (req, res) => {

})

const port = 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

