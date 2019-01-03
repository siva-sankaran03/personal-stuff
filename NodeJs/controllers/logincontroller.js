const express = require('express');
var router  = express.Router();
var { login } = require('../models/login');
// - > localhost:3000/login/
router.get('/',(req, res) => {
    login.find((err, docs) => {
     if (!err){res.send(docs);}  
     else {
         console.log('error in reteriving login details' + JSON.stringify(err, undefined, 2));
     } 
});
});
router.post('/', (req,res)=>
{
    var log = new login({
        email: req.body.email,
        password: req.body.password
    });

});
module.export = router;
