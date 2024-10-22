const { criarReceitas } = require  ("./receitas/criarReceitas")
const { editarReceitas } = require ("./receitas/editarReceitas")
const { excluirReceitas } = require("./receitas/excluirReceitas")
const { listarReceitas } = require ("./receitas/listarReceitas")


//function criarReceitas(id, nome, ingredientes, passosPreparo, tempoPreparo, dificuldades, porcoes, autor)

criarReceitas(10, "bolo", "ovos-açucar-manteiga-farinhaTrigo-sal", "bater manteiga com açucar e ovos- depois restante", 
    "40 min", "fogo medio", "1- mateiga 2-açucar 3-farinha trigo 4-ovos", "Sergio" )

criarReceitas(11, "macarronada", "macarrão-óleo-alho-sal", "cozinhar o macarrão na agua com uma colher de òleo ",
     "20 min", "fogo medio", "não deixar faltar agua", "Gabriel")
     
criarReceitas(15, "ovo frito", "ovo-óleo-sal", "esquentar óleo - colocar o ovo qdo fever óleo",
    "1 min", "fogo medio", "não deixar faltar óleo", "Maria")


listarReceitas()

editarReceitas(15, "ovo frito", "ovo-óleo-sal", "esquentar óleo - colocar o ovo qdo fever óleo",
    "1 min", "fogo medio", "não deixar faltar óleo", "João")

listarReceitas()

excluirReceitas(15)

listarReceitas()


//criarReceitas(10, "bolo", "ovos-açucar-manteiga-farinhaTrigo-sal", "bater manteiga com açucar e ovos- depois restante", "40 min", "fogo medio", "1- mateiga 2-açucar 3-farinha trigo 4-ovos", "Sergio" )
// criarAluno("1012", "Sergio Cunha", "segiocunha@gmail.com", 981518033)
// criarAluno("1015", "Gabriel Dias", "gabrieldias@gmail.com", 98885511)

// listarAluno()

// editarAluno("1015", "Gabriel", "gabrieldias@gmail.com", 98885511)
// listarAluno()

// excluirAluno("1015")
// listarAluno()