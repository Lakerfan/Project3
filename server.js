var express = require('express');
var app = express();
var cheerio = require('cheerio'); // Makes HTTP request for HTML page
var axios = require('axios');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var mongojs = require('mongojs')
var path = require("path");
const Router = require("react-router-dom");
//require('dotenv').config()
// app.engine("react",({ defaultLayout: "main" })); //using React
// app.set("view engine", "");  //using React
// Database config.
var databaseUrl = "scraper";
var collections = ["dataScraped"];

var port = process.env.PORT || 8080;  //could use 3000, 5000, these are open ports
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongofoodDrink";
mongoose.connect(MONGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>console.log("MongoDb connected!"))
.catch(err=>console.log(err))

// app.get("/",(req,res)=>{  ////this is correct as of 11/4/2019 with Ariel
// 	// do something
// })
// app.get("/scraper",(req,res)=>{
// 	// run the scraper
// })


axios.get("https://www.thrillist.com/food-and-drink/").then(function(response) {

  // Load the body of the HTML into cheerio
  var $ = cheerio.load(response.data);

  // Empty array to save our scraped data
  var results = [];

  // With cheerio, find each h4-tag with the class "headline-link" and loop through the results
  $(".hp-article-title").each(function(i, element) {   ////NEED THE PATTERN!!!!!!?????

	// console.log("====================test",$(element))
    // Save the text of the h4-tag as "title"
	var title = $(element).text();
	var link = $(element).attr("href");

    // Find the apartment tag's parent a-tag, and save it's href value as "link"
    // var link = $(element).parent().attr("href");

    // Make an object with data we scraped for this h4 and push it to the results array
    results.push({
      title: title,
      link: link
    });
  });

  // After looping through each apartment-link, log the results
  console.log(results);
});

// mongojs config connects to db var, rtns db error
//var db = mongojs(databaseUrl, collections);

// mongojs config connects to db var, rtns db error
const db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
	console.log("Database Error:", error);
});


//scrapes results from db and returns it//
app.get("/", function (req, res) {
db.dataScraped.find({}, function (error, found) {
// Throw any errors to the console
if (error) {
console.log(error);
}
// If there are no errors, then it sends db to the browser as json//
else {
var reactObject = {    //using React!
articles: found
}
// res.render("index", reactObject);  
res.send("Hey Rocio")
}
});
});


// // Returning 'all' db//clue is FUNCTION, gets req and gives out the results, follow pattern steps//
// app.get("/all", function (req, res) {
// 	db.dataScraped.find({}, function (error, found) {
// 		// Throw any errors to the console
// 		if (error) {
// 			console.log(error);
// 		}
// 		// If there are no errors, then it sends db to the browser as json//
// 		else {
// 			res.json(found);
// 		}
// 	});
// });

// // Scraping data from Thrillist then adds it to mongodb db "jquery"!
// app.get("/scrape", function (req, res) {
// 	// axio makes req from Hispanically Speaking News. Using Cheerio to html text using Axios req
// 	axios.get("https://www.thrillist.com/los-angeles").then(function (response) {
// 		//loading, Using Cheerio to load html text using axios req.
// 		//console.log(response)
// 		var $ = cheerio.load(response.data);
// 		//loads all element with a "title" class using 'children'
// 		$("[itemprop='headline']").each(function (i, element) {
// 			var title = $(element).children("a").text();
// 			var link = "https://www.thrillist.com/los-angeles" + $(element).children("a").attr("href");
// 			// console.log(title + ":" + link)
// 			// use if/else for when it finds both titel and link, it will then insert it into db//
// 			if (title && link) {
// 				db.dataScraped.find(function (err, docs) {
// 					var found = false
// 					for (var doc in docs) {
// 						if (doc.title === docs[doc].title)
// 							found = true;

// 					}
// 					if (found == false) {
// 						db.dataScraped.insert({
// 							title: title,
// 							link: link
// 						},
// 							//if both are not found, it will rtn error
// 							function (err, inserted) {
// 								if (err) {
// 									console.log(err);
// 								}
// 								else {
// 									console.log(inserted);
// 								}
// 							});
// 					}

// 						//res.json(docs)
// 					// docs is an array of all the documents in mycollection
// 				})


// 			}
// 		});
// 	});

// 	// Sends 'Scrape is Done!' msg sen to browser//
// 	res.json("Scrape is Done!");
// });



// // For serving of static CSS/ this is totally correct!//
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // API and HTML routes
// // require("./app/routing/apiRoutes.js")(app);  
// require("./app/routing/htmlRoutes.js")(app, path);
var apartment = ["city ", "state", "zipcode"];
console.log(apartment)
var api = "https://api.zillow.com/X1/apartment/search?q=";
var query = "&q=citystatezip"; 
var apiKey = "&api_key=X1-ZWz17jrfk5oemj_at3ig=10";  //10 is the limit of apartments//
var apartmentInput;
var apartmentButton;
  
// $(document).ready(function() {
  
//   $("#add-appartment").on("click",function(event){
//       event.preventDefault()
//           apartmentInput = $("#apartment-input").val().trim()
//           displayApartmentInfo(apartmentInput)   
//           //console.log(apartmentInput)
//   })
//   $(".apartment").on("click",function(){
//       // // alt("hi")
//     apartmentButton = $(this).attr("data-name")
//     displayApartmentInfo(apartmentButton)   
//     console.log(apartmentButton)
//   })
  

  
  //function displayApartment(moveInput) {
  
  // var apartment = $(this).attr("data-name");
  //   var queryURL = "https://api.zillow.com//apartment/search?q=" +
  //   apartmentInput + "&api_key=X1-ZWz17jrfk5oemj_at3ig=10";
  
  //   $.ajax({   //ajax sends requests//
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function (response) {
  //     var results = response.data  //ajarx returns with the result of request//
  //     console.log(results)
  //     $("#showApartment").empty()
  //     console.log(results.length)
  //     for (var i = 0; i < results.length; i++) {
  
  //       imageTag = $("<img>")
  //       imageTag.attr("src", results[i].images.fixed_height_still.url)
  //       // imageTag.attr("data-still",results[i].images.fixed_height_still.url)
  //       // imageTag.attr("data-state","still")
  //       // imageTag.addClass("")
  //       //console.log(imageTag)
  //       $("#showApartment").append(imageTag)
  //     }
  //   });
  
  //}
 
  //function renderButtons() {
    // $("#buttons-view").empty();
  
    // for (var i = 0; i < apartment.length; i++) {
  
  
    //   var a = $("<button>");
  
    //   a.addClass("apartment");
  
    //   a.attr("data-name", apartment[i]);
  
    //   a.text(apartment[i]);
  
    //   $("#buttons-view").append(a);
    // }
  //}


  


  // API and HTML routes///??as of 11/17 should these be here?  
require("./app/routing/apiRoutes.js")(app);  
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, function () {
	console.log("App listening on port: " + port);
})
