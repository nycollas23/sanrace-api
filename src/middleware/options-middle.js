const jwt = require('../utils/jwt.util');
const secret = "a18d30a300745bfe1c3c85b091af7f01";

module.exports = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();   
}