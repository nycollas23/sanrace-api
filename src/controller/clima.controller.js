const request = require('request');

module.exports.getClima = async (req, res) => {

    try {
        
        request('https://dataservice.accuweather.com/forecasts/v1/daily/5day/2658049?apikey=jnJCDC5q1QxstXROacH094Yz889pSnqx&language=pt-BR&metric=true', { json: true }, (err, _res, temp) => {
            if (err) { return console.log(err); }
            
            res.send({
                temp
            });
            
        });

    } catch(err) {
        return res.status(400).send(err);
    }

}