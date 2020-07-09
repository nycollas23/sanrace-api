const mongoose = require('mongoose');

// const dbPath = "mongodb://<dbuser>:<dbpassword>@ds250607.mlab.com:38485/test-db";
const dbPath = 'mongodb://localhost:27017/sanrace'

mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;