const express = require('express');

//const cheerio = require('cheerio'); // Makes HTTP request for HTML page
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require("./routes");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoConnection = require('./db/connection').connection;
const mysql = require('mysql');
const port = process.env.PORT || 3000;  

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'get_moving_db'
});

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
app.use(bodyParser.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

const jobSearch = require('./routing/jobsSearch');
app.use('/jobs', jobSearch);



const thrillist= require('./controllers/thrillistController.js')
app.use('/thrill', thrillist);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongofoodDrink";
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("MongoDb connected!"))
.catch(err=>console.log(err))

app.listen(port, function () {
	console.log(`API Server Now Listening on Port ${port}`)
})
