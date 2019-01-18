//Declaring the dependencies
var express = require("express");
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var http = require('http')
var bodyParser = require('body-parser');
var mongoOp = require("./model/mongo");
var clientop = require ("./model/client");
var login = require("./model/login");
var router = express.Router();

//To enable cross localhost communication
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Declaring basic metadata
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ "extended": false }));

router.get('/', function (req, res) {
    res.json({ "error": false, "message": "Hello World" });
});

//route() will help to use the same path for different operations
//GET operation to fetch all data in collection



// Login 
router.route("/login")
.get(function (req, res) {
    var response = {};
    login.find({}, function (err, data) {
        //Mongo command to fetch all data from collection.
        if (err) {
            response = { "error": true, "message": "Error fetching data" };
        } else {
            response = { "error": false, "message": data };
        }
        res.json(response);
    });
})
router.route("/login/:id")
    .get(function (req, res) {
        var response = {};
        login.findById(req.params.id, function (err, data) {
            //This will run Mongo Query to fetch data based on ID.
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                response = { "error": false, "message": data };
            }
            res.json(response);
        });
    })

  
     
    //client Routes
    router.route("/clients")
    .get(function (req, res) {
        var response = {};
        clientop.find({}, function (err, data) {
            //Mongo command to fetch all data from collection.
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                response = { "error": false, "message": data };
            }
            res.json(response);
        });
    })
    .post(function (req, res) {
        var db1 = new clientop();
  
        var response = {};
        db1.clientid = req.body.clientid;
        db1.cname = req.body.cname;
        db1.country = req.body.country;
        db1.email = req.body.email;
        db1.enti = req.body.enti;
        db1.contact = req.body.contact;
        db1.contactp = req.body.contactp;
        db1.pincode = req.body.pincode;
    
      
        db1.save(function (err) {
            //save() will run insert() command of MongoDB.
            //It will add new data in collection.
            if (err) {
                response = { "error": true, "message": "Error adding data" };
            } else {
                response = { "error": false, "message": "Data added" };
            }
            res.json(response);
        });
    });

    router.route("/clients/:id")
    .get(function (req, res) {
        var response = {};
        clientop.findById(req.params.id, function (err, data) {
            //This will run Mongo Query to fetch data based on ID.
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                response = { "error": false, "message": data };
            }
            res.json(response);
        });
    })
    //Update user information as per id mentioned
    .put(function (req, res) {
        var response = {};
        // first find out record exists or not
        // if it does then update the record
        clientop.findById(req.params.id, function (err, data) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                //we got data from Mongo.
                //change it accordingly.
                if (req.body.clientid !== undefined) {
                    //case where email needs to be updated.
                    data.clientid = req.body.clientid;
                }
              
                //save the data
                data.save(function (err) {
                    if (err) {
                        response = { "error": true, "message": "Error updating data" };
                    } else {
                        response = { "error": false, "message": "Data is updated for " + req.params.id };
                    }
                    res.json(response);
                })
            }
        });
    })
    //Delete based on user ID
    .delete(function (req, res) {
        var response = {};
        // find the data
        clientop.findById(req.params.id, function (err, data) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                // data exists, remove it.
                mongoOp.remove({ _id: req.params.id }, function (err) {
                    if (err) {
                        response = { "error": true, "message": "Error deleting data" };
                    } else {
                        response = { "error": true, "message": "Data associated with " + req.params.id + "is deleted" };
                    }
                    res.json(response);
                });
            }
        });
    })






    //user

    router.route("/users")
    .get(function (req, res) {
        var response = {};
        mongoOp.find({}, function (err, data) {
            //Mongo command to fetch all data from collection.
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                response = { "error": false, "message": data };
            }
            res.json(response);
        });
    })
    //POST operation to post data to database
    .post(function (req, res) {
        var db = new mongoOp();
      
        var response = {};
        //Fetch email and password from REST request.
        //Add strict validation when you use this in Production.
        db.fname = req.body.fname;
        //Hash the password using SHA1 algorithm.
        db.lname = req.body.lname;
        db.username = req.body.username;
        db.cname = req.body.cname;
        db.email = req.body.email;
        db.userid = req.body.userid;
        db.desg =req.body.desg;
        db.clientid =req.body.clientid;
        db.contact =req.body.contact;
        db.usertype =req.body.usertype;
        db.country = req.body.country;
    
      
        db.save(function (err) {
            //save() will run insert() command of MongoDB.
            //It will add new data in collection.
            if (err) {
                response = { "error": true, "message": "Error adding data" };
            } else {
                response = { "error": false, "message": "Data added" };
            }
            res.json(response);
        });
    });

//GET users as per id mentioned
router.route("/users/:id")
    .get(function (req, res) {
        var response = {};
        mongoOp.findById(req.params.id, function (err, data) {
            //This will run Mongo Query to fetch data based on ID.
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                response = { "error": false, "message": data };
            }
            res.json(response);
        });
    })
    //Update user information as per id mentioned
    .put(function (req, res) {
        var response = {};
        // first find out record exists or not
        // if it does then update the record
        mongoOp.findById(req.params.id, function (err, data) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                //we got data from Mongo.
                //change it accordingly.
                if (req.body.fname !== undefined) {
                    //case where email needs to be updated.
                    data.fname = req.body.fname;
                }
                if (req.body.lname !== undefined) {
                    //case where password needs to be updated
                    data.lname = req.body.lname;
                }
                //save the data
                data.save(function (err) {
                    if (err) {
                        response = { "error": true, "message": "Error updating data" };
                    } else {
                        response = { "error": false, "message": "Data is updated for " + req.params.id };
                    }
                    res.json(response);
                })
            }
        });
    })
    //Delete based on user ID
    .delete(function (req, res) {
        var response = {};
        // find the data
        mongoOp.findById(req.params.id, function (err, data) {
            if (err) {
                response = { "error": true, "message": "Error fetching data" };
            } else {
                // data exists, remove it.
                mongoOp.remove({ _id: req.params.id }, function (err) {
                    if (err) {
                        response = { "error": true, "message": "Error deleting data" };
                    } else {
                        response = { "error": true, "message": "Data associated with " + req.params.id + "is deleted" };
                    }
                    res.json(response);
                });
            }
        });
    })


app.use('/', router);

app.listen(3000);
console.log("Listening to PORT 3000");