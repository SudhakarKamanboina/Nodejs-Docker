
var express = require('express');

var router = express. Router();
router.get('/' , function(req, res) {  

 var os = require('os'); 
var interfaces = os.networkInterfaces(); 
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
res.send(addresses);
});


router.get('/sudh', function(req, res) {

 var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');

 MongoClient.connect("mongodb://192.168.59.103:8888/admin", function(err, db) {
 if(!err) {
   console.log("We are connected");
 
var collection = db.collection('sudh');
   // Locate all the entries using find
   collection.find().toArray(function(err, results) {
       console.dir(results);
       res.send(results);// Let's close the db
       db.close();
   });

 }
});


});


router.get('/furnitureItem/:name', function(req, res) {

 var requestedItem =  req.params.name; 
 console.log(requestedItem);
 var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient;

   MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
 if(!err) {
   console.log("We are connected");
 
var collection = db.collection('furniture');
// Locate all the entries using find
   collection.findOne({name:requestedItem}, function(err, results) {
       console.dir(results);
       res.send(results);// Let's close the db
       db.close();
   });

 }
});
});




module.exports=router; 









































