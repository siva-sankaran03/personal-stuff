const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create Schema and model
var logindb = mongoose.model('logindb',{
    email: { type: String },
    password: { type: String}
});

module.exports = {
    logindb 
};
