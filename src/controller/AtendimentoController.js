const db = require('../database/database');
const DateHelper = require('../helper/DateHelper')
// const regraAtendimento = require('../models/Atendimento');
const regraAtendimento = {
    "id": 1,
    "diasAtendimento": [{
        "dia":new Date,
        "horarioAtendimento": {
            "inicio": "",
            "fim": ""
        }
    }],
}


module.exports = {
    
    async cadastrar(req, res){
        const atendimento = await req.body;
        console.log(atendimento);
        // console.log(atendimento.diasAtendimento.dia.toString())
    
        atendimento.diasAtendimento = atendimento.diasAtendimento.map(diaAtendimento => {
            console.log(diaAtendimento.dia);
            console.log(diaAtendimento.horarioAtendimento);
            console.log(diaAtendimento.horarioAtendimento);
            diaAtendimento.dia = DateHelper.rightDateOrder(diaAtendimento.dia);
            diaAtendimento.horarioAtendimento.inicio = diaAtendimento.horarioAtendimento.inicio;
            diaAtendimento.horarioAtendimento.fim = diaAtendimento.horarioAtendimento.fim;
        })
        console.log(  atendimento.id);
        atendimento.id += 1;
        console.log(  atendimento.id);
        await db.get('regraAtendimento')
            .push(atendimento)
            .write();
    
        return res.send(atendimento);
    },

    async listar(req, res) {
        const atendimentos = await db.get('regraAtendimento')
            .value();

        return res.send(atendimentos);
    },

    async apagar(req, res){
        try{  
            await db.get('regraAtendimento')
                .remove({id: req.params.id}).write();
            res.sendStatus(204);
        }catch(err){
            res.status(500).json;   
        }
            
    }
}