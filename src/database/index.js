const mongoose = require('mongoose');

//const dbPath = "mongodb://sanrace:sanrace123@mongo_sanrace:27017/sanrace";
const dbPath = 'mongodb://localhost:27017/sanrace'

mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;