const express = require('express');

const app = express();

const db = require('./database/database');

db.defaults({"regraAtendimento": []})
    .write();
    
app.use(express.json());
app.use(require('./rotas'));


app.listen(3001, ()=>{
    console.log('Servidor rodando na porta 3000');
})

