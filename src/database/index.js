const mongoose = require('mongoose');

const URL = process.env.SR_MONGO_URL || 'localhost';
const DB = process.env.SR_MONGO_DB || 'sanrace';
const USER = process.env.SR_MONGO_USER || '';
const PWD = process.env.SR_MONGO_PWD || '';

const dbPath = `mongodb://${USER}:${PWD}@${URL}:27017/${DB}`;

mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;