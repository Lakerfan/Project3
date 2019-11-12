// working on it still 11/11/2019
  
const express = require("express");
// //declared template/path -this will always remain the same//
const router = express.Router();

// // Import the model (.js) to use its database functions.
const apartment = require("../models/apartment.js");

// // Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
//   console.log("helloWorld")
apartment.all(function(data) {
//     const hbsObject = {
//       apartment: data
//     };
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/apartment", function(req, res) {
//   apartment.create(["apartmetn_name", "Saved"], [req.body.apartment_name, req.body.saved], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/apartmetn/:id", function(req, res) {
//   const condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   apartment.update(
//     {
//       saved: req.body.devoured
//     },
//     condition,
//     function(result) {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });

// // Export routes for server.js to use.
// module.exports = router;