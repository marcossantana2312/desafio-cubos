const express = require('express');

const rotas = express.Router();

const AtendimentoController = require('./controller/AtendimentoController')

rotas.post('/regra-atendimento/add', AtendimentoController.cadastrar)


module.exports = rotas;