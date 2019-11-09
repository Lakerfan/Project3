const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CityLife', {useNewUrlParser: true});

module.exports = mongoose;
