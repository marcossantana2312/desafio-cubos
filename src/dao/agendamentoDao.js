const db = require('../database/database');
const helper = require('../util/DateHelper');

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

       let a =helper.textoParaData(inicio);
       let b=helper.textoParaData(fim);
       return helper.extrairIntervaloDisponivel(agendamentos, a, b);
            
    }


}