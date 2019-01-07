const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
var logincontroller = require('./controllers/logincontroller');
var app = express();
app.listen(3000, () => console.log('server started at port : 3000'));
app.use('/login',logincontroller);
module.exports=mongoose;
module.exports=bodyParser;
