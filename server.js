var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/assingment/home.html'));
});var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port, ipaddress);