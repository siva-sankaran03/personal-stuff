const mongoose = require('mongoose');
var login = mongoose.model('login', {
    email: { type: String},
    password: { type: String}
});
module.exports = {
    login 
};