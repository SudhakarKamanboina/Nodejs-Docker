var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
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

module.exports = router;
