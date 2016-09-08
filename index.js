var express = require('express');
var app = express();
var mysql=require("mysql");
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var fs = require('fs');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
var blog = require('./routes/blog');
app.get('/', function(request, response) {
  response.render('pages/index');
});
app.use('/api',blog);
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


