const diaDaSemana = [
    {"dia": "domingo", "valor": 1},{"dia": "segunda", "valor": 1},{"dia": "terça", "valor": 2},
    {"dia": "quarta", "valor": 3},{"dia": "quinta", "valor": 4},{"dia": "sexta", "valor": 5},
    {"dia": "sabado", "valor": 6}]

module.exports = {
    dateToText(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    },

    rightDateOrder(texto){
        console.log(texto);
        
        if(typeof texto === 'string'){
            let reorganizar =  texto.split('/');
            let ordemCorreta = `${reorganizar[2]}/${reorganizar[1]}/${reorganizar[0]}`;
            texto = this.textToDate(ordemCorreta);
        }else{
           texto = texto.map(text => {
                let reorganizar =  text.split('/');
                let ordemCorreta = `${reorganizar[2]}/${reorganizar[1]}/${reorganizar[0]}`;
                console.log(ordemCorreta);
                return text = this.textToDate(ordemCorreta);            
            })
        } 
       return texto;                
    },

    textToDate(texto){  
        return new Date(...texto.split('/').map((item, indice) => item - indice % 2));
    }
}
