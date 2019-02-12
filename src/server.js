const express = require('express');

const app = express();

const db = require('./database/database');

const porta = 3000;
db.defaults({"regraAtendimento": []})
    .write();
    
app.use(express.json());
app.use(require('./rotas'));


app.listen(porta, ()=>{
    console.log('Servidor rodando na porta ' + porta);
})

