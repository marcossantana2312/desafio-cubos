const express = require('express');

const app = express();

const db = require('./database/Database');

const porta = 3000;

db.defaults({"regraAtendimento": []})
    .write();
    
app.use(express.json());
app.use(require('./Rotas'));


app.listen(porta, ()=>{
    console.log('Servidor rodando na porta ' + porta);
})

