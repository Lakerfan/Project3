import React from "react";

function Events (){

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
    
        // Find the h4 tag's parent a-tag, and save it's href value as "link"
        // var link = $(element).parent().attr("href");
    
        // Make an object with data we scraped for this h4 and push it to the results array
        results.push({
          title: title,
          link: link
        });
      });
    
      // After looping through each h4.headline-link, log the results
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
}

export default Events;