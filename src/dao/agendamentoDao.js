const db = require('../database/Database');
const helper = require('../helper/DataHelper');

module.exports = {
    
    cadastrar(agendamento){
        return db.get('regraAtendimento')
        .push(agendamento)
            .last()
            .assign({ id: Date.now().toString() })
            .write()

    },

    listarTodos(){
        return db.get('regraAtendimento')
            .value();
    },

    apagar(id){
       return db.get('regraAtendimento')
            .remove({id: id})
            .write();
    },

    listarPorIntervalo(inicio, fim){
        const agendamentos = db.get('regraAtendimento')
        .value();
        
        
        inicio = helper.textoParaData(inicio);
        fim = helper.textoParaData(fim);
        console.log(inicio);
        console.log(fim);
       return helper.extrairIntervaloDisponivel(agendamentos, inicio, fim);
            
    }


}