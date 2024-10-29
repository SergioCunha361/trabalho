const { receitas } = require("./receitas");

function excluirTodasReceitas(){
        try {
            receitas.length = 0
            console.log("Todas receitas excluidas com sucesso")
    } catch (error){
    console.error("Erro ao excluir todas as receitas");
    }  
}
module.exports = { excluirTodasReceitas }