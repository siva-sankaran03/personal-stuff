const mongoose = require('mongoose');
var login = mongoose.model('login', {
    name: { type: String},
    password: { type: String}
});
module.exports = {
    login 
};
