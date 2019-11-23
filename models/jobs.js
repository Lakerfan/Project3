const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    location: String,
    link: String,
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs