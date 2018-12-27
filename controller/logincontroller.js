const express = require('express');
const router = express.Router();
var {logindb} = require('../models/logindb');
///localhost 3000/logindb/list
router.get('/',(req, res) => {
    logindb.find((err, docs) => {

        if(!err) { res.send(docs);
    }else { console.log('error' + JSON.stringify(err, undefined, 2));}

    });
});
router.get('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("No record with given id: $(req.params.id" );

    logindb.get('./id', (req, res) => {
        if(!err) { res.send(doc);}
        else{ console.log('error in retriving Employee: ' + JSON.stringify(err, undefined ,2 ));}
    })
  
});
router.post('/', (req,res) => {
    var login = new logindb({
        email: req.body.email,
        password: req.body.password

    });
    login.save((err, docs)=>{
        if(!err) { res.send(docs);}
        else{
            console.log('error');
        }

    });
});
 module.exports = router;