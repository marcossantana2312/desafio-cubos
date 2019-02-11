const dao = require('../dao/agendamentoDao');

module.exports = {
    
    async cadastrar(req, res){
        const agendamento =  req.body;
        try{
            await dao.cadastrar(agendamento);
            res.json(agendamento);
        }catch(err){
            console.log(err);
            res.status(500).json({msg: 'Server internal error'})
        }
        
    },

    async listar(req, res) {
        try{
            const agendamentos = await dao.listarTodos();
            res.json(agendamentos);
        }catch(err){
            console.log(err);
            res.status(500).json({msg: 'Server internal error'})
        }
    },

    async apagar(req, res){
        const id = req.params.id;
        try{  
            await dao.apagar(id);
            res.sendStatus(204);
        }catch(err){
            console.log(err);
            res.status(500).json({msg: 'Server internal error'});   
        }
            
    },

    async listarPorIntervalo(req, res){

        const {inicio, fim} = req.query;
        
        try{
            const horariosDisponiveis = await dao.listarPorIntervalo(inicio, fim);
            res.json(horariosDisponiveis);
        }catch(err){
            console.log(err);
            res.status(500).json({msg: 'Server internal error'});
        }
    }
}