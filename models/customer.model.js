const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({

    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
},
current_balance: {
    type: Number,
    // required: true
}
})
 
module.exports = customerSchema;
