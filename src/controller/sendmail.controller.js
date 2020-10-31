const PistaSchema = require('../models/pista');
const nodemailer = require('nodemailer');

module.exports.send = async (req, res) => {

    const nome = req.body.nome;
	const email = req.body.email;
    const assunto = req.body.assunto;
    const msg = req.body.msg;
    

    const tranporter = nodemailer.createTransport({
        name: 'ngbrkart.com.br',
        host: 'ngbrkart.com.br',
        port: 465,
        secure: true,
        auth:{
            user: 'sanrace@ngbrkart.com.br',
            pass: 'S@nR@CE' 
        }
    });

    const mailOptions = { 
        from: 'SanRace Site<sanrace@ngbrkart.com.br>',
        to: 'nycollas23@hotmail.com, sanrace@hotmail.com',
        subject: `Contato Site - SanRace`,
        html: `<h1>Nova Mensagem no site SanRace</h1><p><b>Nome: </b>${nome}</p><b>Email: </b>${email}</p><p><b>Assunto: </b>${assunto}</p><p><b>Mensagem: </b>${msg}</p>`
    }

    tranporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(400).send(err);
        }

        res.send({'status': 'ok'});
      })

}
