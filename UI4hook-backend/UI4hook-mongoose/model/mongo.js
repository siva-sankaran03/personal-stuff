var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/ui4hook');

//Create instance of Schema
var mongoSchema =   mongoose.Schema;

//Create schema
var userSchema  = {
    "fname" : String,
    "lname" : String,
    "username" : String,
    "cname" : String,
    "email" : String,
    "userid" : String,
    "desg" : String,
    "clientid" : String,
    "contact" : Number,
    "usertype" : String,
    "country" : String

};


module.exports = mongoose.model('adduser',userSchema);
