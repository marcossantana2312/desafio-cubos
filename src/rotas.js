const express = require('express');

const rotas = express.Router();

rotas.get('/regra-atendimento', (req, res) =>{

})

rotas.delete('/regra-atendimento/del', (req, res) => {

})

rotas.post('/regra-atendimento/add', (req, res) => {

})

rotas.get('regra-atendimento/intervalo/{params}', (req, res) => {
    
})

module.exports = rotas;