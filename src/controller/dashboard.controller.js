const CampeonatoSchema = require('../models/campeonato');
const PilotoSchema = require('../models/pilot');


module.exports.getInformation = async (req, res) => {

    try {

        const piloto = await PilotoSchema.findOne(
            {
                '_id': req.body.UserId
            }
        );

        const companheiros = await PilotoSchema.find(
            {
                '_id': { $ne: req.body.UserId  }
            }
        );

        const list = [];
        
		piloto.campeonatos.forEach((campeonato) => {
			list.push(campeonato.codigo);
		});

        const campeonatos = await CampeonatoSchema.find({
            '_id': { $in: list }
        });
		
		
		campeonatos.forEach((campeonato) => {
			
			campeonato.classificacao.forEach((classificacao) => {
				if (classificacao.idPiloto === req.body.UserId) {
					campeonato.classificacaoPiloto.posicao = classificacao.posicao;
					campeonato.classificacaoPiloto.pontos = classificacao.pontos;
				}
			});
			
        });

        res.send({
            piloto,
            companheiros,
            campeonatos
        });

    } catch(err) {
        console.log(err);
        res.status(400).send(err);
    }

}