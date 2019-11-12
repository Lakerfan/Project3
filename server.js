const express = require('express');

//const cheerio = require('cheerio'); // Makes HTTP request for HTML page
//const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoConnection = require('./db/connection').connection;
//var mongo = require('mongodb');
//var mongojs = require('mongojs')
//var path = require("path");

const app = express();
app.use(
  session({
    secret: 'west wing',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoConnection})
  })
)

app.use(bodyParser.urlencoded({ extended: false}));

//const routes = require('./routes')
//app.use('/', routes);



//var databaseUrl = "scraper";
//var collections = ["dataScraped"];

const port = process.env.PORT || 8080;  //could use 3000, 5000, these are open ports
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongofoodDrink";
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("MongoDb connected!"))
.catch(err=>console.log(err))



app.listen(port, function () {
	console.log("App listening on port: " + port);
})
