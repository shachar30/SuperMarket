var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');
var app = express();

// DataBase
mongoose.connect(config.database, function (err) {
    
    if (err) {
        console.log(err);
    } else {
        console.log("connected to DataBase-GameOn");
    }

});;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

var port = config.port;

app.get('*' , function (req, res) { 

    res.sendFile(__dirname + '/public/views/indexMobile.html');

});

app.get('/myfridge' , function (req, res) {
    
    res.sendFile(__dirname + '/public/views/myfridge.html');

});


app.listen(config.port, function (err) {

    if (err) {
        console.log(err);
    } else {
        console.log("listeing on port 3000-GameOn");
    }

});