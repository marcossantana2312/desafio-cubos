const express = require('express');

const rotas = express.Router();

const AtendimentoController = require('./controller/AtendimentoController')

rotas.post('/regra-atendimento/add', AtendimentoController.cadastrar);

rotas.get('/regra-atendimento/listar', AtendimentoController.listar);

rotas.delete('/regra-atendimento/apagar/:id', AtendimentoController.apagar);
module.exports = rotas;