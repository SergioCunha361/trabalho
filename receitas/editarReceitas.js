const { receitas } = require("./receitas")


function editarReceitas(id, novoNome, novoIngredientes, novoPassosPreparo, novoTempoPreparo, novoDificuldades, novoPorcoes, novoAutor){
    try {
        const receita  = receitas.find(elementodoArray =>
            elementodoArray.id === id           
        )
        
        if (receita){          // se existir aluno a variavel aluno está  true se nao existir indefinido false
           
            receita.nome     = novoNome
            receita.ingredientes = novoIngredientes
            receita.passosPreparo = novoPassosPreparo
            receita.tempoPreparo = novoTempoPreparo
            receita.dificuldades = novoDificuldades
            receita.porcoes = novoPorcoes
            receita.autor = novoAutor
           
            console.log("Receita Atualizada com sucesso!")
        } else {
            console.log("Receita não encontratada!")
        }

    } catch (error) {
        console.log("id não cadastrado", error.message)
    }

}


module.exports = { editarReceitas };