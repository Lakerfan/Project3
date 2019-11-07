
//start off by creating string array in brackets, each with quotes, followed by commas//
//Zillow API Key Postings API
// Your Zillow Web Services Identification (ZWSID) is: X1-ZWz17jrfk5oemj_at3ig
// citystatezip: The city+state combination and/or ZIP code for which to search. This string should be URL encoded. Note that giving both city and state is required. 
// Using just one will not work.
const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res)=>{
  axios
    .get("https://api.zillow.com/X1/apartment/search?q=", {params: req.query})
    .then(({ data: {results} }) => res.json(results))
    .catch(err => res.status(422).json.err);
})

  module.exports = router;