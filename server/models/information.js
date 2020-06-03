const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let informationSchema = new Schema({
  street: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  zip: {
    type: String,
  },
});

module.exports = mongoose.model("Information", informationSchema);
