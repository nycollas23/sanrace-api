const mongoose = require('mongoose');

const dbPath = "mongodb://sanrance-teste01:NyckNath-1@mongo71-farm76.kinghost.net:27017/sanrance-teste01";
//const dbPath = 'mongodb://localhost:27017/sanrace'

mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;