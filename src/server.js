const express = require('express');

const app = express();

app.use(require('./rotas'));

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})

