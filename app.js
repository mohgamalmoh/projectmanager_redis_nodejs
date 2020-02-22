var express = require('express');
var path = require('path');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var redis = require('redis');

var app = express();
//view engin setup

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Wapp.use(bodyParser.static(path.join(__dirname, 'public')));
app.listen(3000);
console.log('server started on port 3000');
module.exports = app;