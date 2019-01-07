const mongoose = require('mongoose');
var loginschema = new mongoose.Schema( {
    email: String,
    password: String
});
module.exports = mongoose.Schema('login', loginschema)

