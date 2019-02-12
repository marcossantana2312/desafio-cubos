const express = require('express');

const rotas = express.Router();

const AtendimentoController = require('./controller/AtendimentoController')

rotas.post('/regras-agendamento', AtendimentoController.cadastrar);

rotas.get('/regras-agendamento', AtendimentoController.listar);

rotas.delete('/regras-agendamento/apagar/:id', AtendimentoController.apagar);

rotas.get('/regras-agendamento/disponiveis', AtendimentoController.listarPorIntervalo)
module.exports = rotas;