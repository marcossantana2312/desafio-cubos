const db = require('../database/database');
const DateHelper = require('../helper/DateHelper')
const regraAtendimento = require('../models/Atendimento');
module.exports = {

    async listar(req, res) {
        const atendimentos = await db.get('regraAtendimentos')
            .value();
        return atendimentos;
    },

    async cadastrar(req, res){
        const atendimento = await req.body;
        console.log(atendimento);
        console.log(atendimento.diasAtendimento.toString());
        regraAtendimento.diasAtendimento.dia= DateHelper.rightDateOrder(atendimento.diasAtendimento)

        return res.send(regraAtendimento);
    }
}