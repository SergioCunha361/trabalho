const { receitas } = require("./receitas");

function criarReceitas(id, nome, ingredientes, passosPreparo, tempoPreparo, dificuldades, porcoes, autor){
       const novaReceita = { 
        id,
        nome,
        ingredientes,
        passosPreparo,
        tempoPreparo,
        dificuldades,
        porcoes,
        autor   
    }
    
    try {
        receitas.push(novaReceita)
    } catch (error) {
        console.error("Error ao cadastrar dados", error.message)
    }   
}

module.exports = { criarReceitas }