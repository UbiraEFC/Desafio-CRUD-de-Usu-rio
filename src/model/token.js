const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    _id: {type: String},
    id_user: {type: String},
    login_date: {type: Date}
},{
    _id: false,
    versionKey: false
});

module.exports = mongoose.model('Token', tokenSchema);