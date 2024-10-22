const { receitas } = require("./receitas")


function listarReceitas(){
    try { 
        console.table(receitas)
    
    } catch (error){
        console.log("erro ao listar receitas");
    

}
}


module.exports = { listarReceitas };