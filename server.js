// const express =require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
const mongoose = require('mongoose');
//ES6 promise
mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://localhost:27017/ui4hooks');

    mongoose.connection.once('open', function(){
       
        console.log("connection has been made, now make fireworks");
   
    }).on('error',function(error) {
    
    
    console.log("connection error:".err);    
    }); 
    
    module.exports = mongoose;

//connnect to mongodb

// const app=express();


// const api = require('./server/routes/api');
// Getting our api routes

//using middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false}));

// app.use(express.static(path.join(__dirname,'dist')));
// app.use('/api', api);
// // catch all other request and return to the index
// app.route('/*').get(function(req, res) {
//     res.sendFile( __dirname + '/src/index.html');
// });




// const port = process.env.PORT || 3000;
// app.set('port', port);

// app.listen(3000, (req, res)=>{
//     console.log('Running on port ${port}');
    
// });