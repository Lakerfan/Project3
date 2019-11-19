const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CityLifeUsers', {useNewUrlParser: true});

module.exports = mongoose;