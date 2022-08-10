const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {type: String},
    name: {type: String},
    email: {type: String},
    password: {type: String},
    phones: [{
        number: {type: String},
        ddd: {type : String}
    }]
},{
    _id: false,
    versionKey: false
});

module.exports = mongoose.model('User', userSchema);