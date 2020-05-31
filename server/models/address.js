const mongoose = require('mongoose');

let Schema = mongoose.Schema;


let addressSchema = new Schema({
    
    street: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    zip: {
        type: String
    }
});


module.exports = mongoose.model( 'Address', addressSchema );
