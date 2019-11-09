const axios = require('axios');
const router = require('express').Router();

axios.get('/', (req, res) => {
    axios
        .get(
            `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${process.env.REACT.APP.PROJECT_3_APP_ID}&app_key=${process.env.REACT.APP.PROJECT_3_APP_KEY}`,
            ({params: req.query})
        .then(({data: {results} }) => results.json(results))
        .catch(err => res.status(422).json(err); 
})

module.exports = router;