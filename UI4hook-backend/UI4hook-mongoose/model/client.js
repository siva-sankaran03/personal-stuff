var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/ui4hook');

//Create instance of Schema
var mongoSchema =   mongoose.Schema;



var clientSchema  = {
    "clientid" : String,
    
"cname" : String,
"contact": String,
"email": String,
"contactp": String,
"enti": String,
"country": String,
"pincode": String


 };

//Create model if not exists.
 module.exports = mongoose.model('addclient',clientSchema);

