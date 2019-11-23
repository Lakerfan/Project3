import axios from 'axios';
const api_id = process.env.PROJECT_3_API_ID;
const api_key = process.env.PROJECT_3_API_KEY;

export default {

    getNewJobs: function() {
        return axios.get(`http://api.adzuna.com:80/v1/api/jobs/gb/search/1?app_id=${api_id}&app_key=
        ${api_key}&results_per_page=20&what=""&where=losangeles1&content-type=application/json`);
    },

    getSavedJobs: function() {
        return axios.get("/api/jobs/");
    },

    deleteJobs: function(id){
        return axions.delete("/api/jobs" +id);
    },

    saveJobs: function(jobData){
        return axios.post("/api/jobs", jobData);
    }
};