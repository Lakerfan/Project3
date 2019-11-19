
const axios = require('axios');
const router = require('express').Router();
const api_id = process.env.PROJECT_3_APP_ID
const api_key = process.env.PROJECT_3_APP_KEY


router.get('/', (req, res) => {
    axios
        .get(
            `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${api_id}&app_key=${api_key}&what=""&where=losAngeles`,
            {params: req.query})
        .then(({ data: {results} }) => res.json(results))
        .catch(err => res.status(422).json.err)
})

module.exports = router;