const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    estimated_hours : {
        type :  Number,
        required: true
    },
    subject : String,
    status : String,
    description : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;