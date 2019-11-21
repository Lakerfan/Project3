
const axios = require('axios');
const router = require('express').Router();
const api_id = process.env.PROJECT_3_APP_ID || '66f58336'
const api_key = process.env.PROJECT_3_APP_KEY || 'f5670c6639c00421fd30c2631b6b8e1d'


router.get('/', (req, res) => {
    const { job, location } = req.query;
    const URL = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${api_id}&app_key=${api_key}&what=${job}&where=${location}&results_per_page=20`
    // const URL = `https://authenticjobs.com/api/?format=json&api_key=${API_KEY_NEEDED_HERE}&method=aj.jobs.search&keywords=${job}&location=${location}`;

    console.log('URL======', URL)
    return axios
        .get(
            URL,
            { Accept: 'application/json' })
        .then(({ data: {results} }) => res.json(results))
        .catch(err => res.json(err))
})

module.exports = router;