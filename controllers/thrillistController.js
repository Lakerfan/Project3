const axios = require('axios');
const mongojs = require('mongojs');
const router = require("express").Router();
const cheerio = require("cheerio")
var obj;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongofoodDrink";
const db = mongojs(MONGODB_URI, ["dataScraped"]);
db.on("error", function (error) {
  console.log("Database Error:", error);
});


//function Events (){
router.get("/scrape", function (req, res) {
  axios.get("https://www.thrillist.com/food-and-drink/").then(function (response) {

 // axio makes req from Thrillist. Using Cheerio to html text using Axios req
 axios.get("https://www.thrillist.com/los-angeles").then(function (response) {
  //loading, Using Cheerio to load html text using axios req.
  //console.log(response)


  var $ = cheerio.load(response.data);
  //loads all element with a "title" class using 'children'
  $(".hp-article-title").each(function (i, element) {
    var title = $(element).text();
    var link = $(element).attr("href");     
     console.log(title + ":" + link)
    // use if/else for when it finds both titel and link, it will then insert it into db//
    if (title && link) {
      db.dataScraped.find(function (err, docs) {
        var found = false
        for (var doc in docs) {
          if (title === docs[doc].title)
            found = true;

        }
         obj={
          title: title,
            link: link
        }

        if (found == false) {
          db.dataScraped.insert({
            title: title,
            link: link
          },
            //if both are not found, it will rtn error
            function (err, inserted) {
              if (err) {
                console.log(err);
              }
              else {
                
                
              }
            });
        }
      })
    }
  });
});

// Sends 'Scrape is Done!' msg sen to browser//

res.json("Scrape is Done Rocio!");


  });
});

// // Scraping data from Thrillist then adds it to mongodb db "jquery"!
// router.get("/scrape2", function (req, res) {
//   // axio makes req from Thrillist. Using Cheerio to html text using Axios req
//   axios.get("https://www.thrillist.com/los-angeles").then(function (response) {
//     //loading, Using Cheerio to load html text using axios req.
//     //console.log(response)

  
//     var $ = cheerio.load(response.data);
//     //loads all element with a "title" class using 'children'
//     $(".hp-article-title").each(function (i, element) {
//       var title = $(element).text();
//       var link = $(element).attr("href");     
//        console.log(title + ":" + link)
//       // use if/else for when it finds both titel and link, it will then insert it into db//
//       if (title && link) {
//         db.dataScraped.find(function (err, docs) {
//           var found = false
//           for (var doc in docs) {
//             if (doc.title === docs[doc].title)
//               found = true;

//           }
//            obj={
//             title: title,
//               link: link
//           }

//           if (found == false) {
//             db.dataScraped.insert({
//               title: title,
//               link: link
//             },
//               //if both are not found, it will rtn error
//               function (err, inserted) {
//                 if (err) {
//                   console.log(err);
//                 }
//                 else {
                  
                  
//                 }
//               });
//           }

//           //res.json(docs)
//           // docs is an array of all the documents in mycollection
//         })


//       }
//     });
//   });

//   // Sends 'Scrape is Done!' msg sen to browser//
  
//   res.json("Scrape is Done!");
 
// });



// // For serving of static CSS/ this is totally correct!//
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // API and HTML routes
// // require("./app/routing/apiRoutes.js")(app);  
// require("./app/routing/htmlRoutes.js")(app, path);
//}

module.exports = router;