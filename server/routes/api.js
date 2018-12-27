const express = require('express');
const router = express.Router();
const axios = require('axios');

//const MongoClient= require('mongodb').MongoClient;
const objectID = require('mongodb').objectID;
//GET POST
// const connecttion =(closure) => {
//     return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
//         if (err) return console.log(err);
//     closure(db);
//     });
// };
//reponse handling
let reponse = {
    status: 200,
    data: [],
    message: null
};
//get users
// router.get('/users', (req, res) =>
// {
//     connecttion((db) => {
//         db.collection('users')
//         .find()
//         .toArray()
//         .then((users) => {
//             Response.data = users;
//             res.json(reponse);
//         })
//         .catch((err) => {
//             sendError(err, res);
//         });

//     });
//} );

module.exports = router;
