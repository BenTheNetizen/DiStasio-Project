var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Post = require('./models/models'), //created model loading here
  bodyParser = require('body-parser');
  cors = require('cors');
  
// mongoose instance connection url connection
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://admin:tpZtlOuJkuyxF98E@cluster0.bbgn7.mongodb.net/Curbside?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors());

var routes = require('./routes/index'); //importing route
routes(app); //register the route

app.listen(port);

console.log('API server started on: ' + port);

// handle bad HTTP requests
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });