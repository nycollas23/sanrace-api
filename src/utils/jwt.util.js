const jwt = require('jsonwebtoken');
const secret = "a18d30a300745bfe1c3c85b091af7f01"

module.exports.validation = (req, res, next) => {

    const authHeader = req.headers.authorization;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    if(req.method == 'OPTIONS') {
        next();
    }

    if(!authHeader) {
        res.status(401).send({'error': 'Need Token Authorization'});
    } else {

        const [type, token] = authHeader.split(' ');

        jwt.verify(token, secret, (err, decode) => {

            if (err) { 
                res.status(401).send(err); 
                next();
            }

            req.body.UserId = decode.userId;

            next();

        });

    }

}

module.exports.create = (userId) =>{

    const token = jwt.sign({'userId': userId }, secret, {
        expiresIn: 3600,
    });

    return token;

}