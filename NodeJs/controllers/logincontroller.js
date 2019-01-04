const express = require('express');

const router = express.Router();
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

router.post('/', (req, res)=>
{
    var log = new login({
        name: req.body.name,
        password: req.body.password,
    });
log.save((err, doc) => {
    if (!err){res.send(doc);}
    else{ console.log('Error on Employee Save :' + JSON.stringify(err, undefined, 2));}
});
}); 
module.exports = router;
