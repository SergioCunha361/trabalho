const { receitas } = require("./receitas")

function excluirReceitas(id){
    try {
        const indice  = receitas.findIndex(elementodoArray =>
            elementodoArray.id === id         
        )
        
        if (indice === -1){ 
            console.log("Receita não encontrada!")        

        } else {        
            let nome = receitas[indice].nome
            receitas.splice(indice, 1)
            console.log(`A receita de ${ nome } foi excluída!`);
        }

    } catch (error) {
        console.log("Não podemos exluir - id não cadastrada", error.message)
    }

}


module.exports = { excluirReceitas };