const mongoose = reuqire('mongoose');
mongoose.connect('mongodb://localhost/CityLife', {useNewUrlParser: true});

module.exports = mongoose;
