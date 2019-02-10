module.exports = {
    dateToText(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    },

    rightDateOrder(texto){
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