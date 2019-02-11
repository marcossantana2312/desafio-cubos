module.exports = { 
    
    dataParaTexto(data){
        return `${data.getDate()}-${data.getMonth()+01}-${data.getFullYear()}`
    },

    textoParaData(texto){  
        let reorganizar =  texto.split('-');
        let ordemCorreta = `${reorganizar[2]}-${reorganizar[1]}-${reorganizar[0]}`;
        return new Date(...ordemCorreta.split('-').map((item, indice) => item - indice % 2));
    },

    extrairIntervaloDisponivel(agendamentos, inicio, fim){
        let intervalo = [];
        for (let i = inicio.getDate(); i <= fim.getDate(); i++){
            intervalo.push(new Date(inicio.getFullYear(), inicio.getMonth(), i));
        } 
        var disponiveis = [];
        agendamentos.forEach(agendamento => {
            if(agendamento.tipo == 'especifico'){
               intervalo.map(dia => {

                    if(this.dataParaTexto(dia) == this.dataParaTexto(this.textoParaData(agendamento.dias[0]))){
                       disponiveis.push({dia: this.dataParaTexto(dia), intervalo: agendamento.horario});
                    }
                })
            }else if(agendamento.tipo == 'diario'){
                
                intervalo.map(dia => {
                    disponiveis.push({dia: this.dataParaTexto(dia), intervalo: agendamento.horario});
                })

            }else if(agendamento.tipo == 'semanal'){
                agendamento.dias.forEach(dia => {
                    intervalo.map(d => {
                        if(d.getDay() == dia){
                            disponiveis.push({dia: this.dataParaTexto(d), intervalo: agendamento.horario})
                        }
                    })
                })
            }
        })
        return this.tratarDatasDuplicadas(disponiveis);
        
    },

    tratarDatasDuplicadas(disponiveis){
        disponiveis.forEach(dia => {
            for(let i =0; i< disponiveis.lenght(); i++){
                
                if(dia.dia == disponiveis[i].dia && dia.intervalo != disponiveis[i].intervalo){
                    dia.intervalo = dia.intervalo.concat(disponiveis[i].intervalo);
                    dia.slice(1, i)
                    
                }
            }
        })
        return disponiveis;
        
    }

}
