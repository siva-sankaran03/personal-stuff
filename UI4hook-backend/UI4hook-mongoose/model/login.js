var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/ui4hook');

//Create instance of Schema
var mongoSchema =   mongoose.Schema;



var loginSchema  = {
   "email": String,
   "password": String,
   "usertype":String


 };

//Create model if not exists.
 module.exports = mongoose.model('login',loginSchema);

