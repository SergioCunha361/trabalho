const prompt = require("prompt-sync")()
const { criarReceitas } = require("./receitas/criarReceitas")
const { editarReceitas } = require("./receitas/editarReceitas")
const { excluirReceitas } = require("./receitas/excluirReceitas")
const { listarReceitas } = require("./receitas/listarReceitas")
const { excluirTodasReceitas } = require("./receitas/excluirTodas")

function exibirMenu() {

    console.log("=====================");
    console.log("1 - Criar Receita");
    console.log("2 - Editar Receita")
    console.log("3 - Excluir Uma Receita")
    console.log("4 - Listar Receitas")
    console.log("5 - Excluir todas Receitas")
    console.log("9 - Sair")
    console.log("======================");

}
let id;
let opcao;
do {
    exibirMenu()
    opcao = parseInt(prompt("Digite número: "));

    switch (opcao) {
        case 1:
            id = prompt("Digite o id: ");
            let nome = prompt("Digite o nome: ");
            let ingredientes = prompt("Digite ingredientes: ");
            let passosPreparo = prompt("Digite passos para preparo: ");
            let tempoPreparo = prompt("Digite tempo de preparo: ");
            let dificuldades = prompt("Digite dificuldades: ");
            let porcoes = prompt("Digite porções: ");
            let autor = prompt("Digite o autor: ");
            criarReceitas(id, nome, ingredientes, passosPreparo, tempoPreparo, dificuldades, porcoes, autor);
            break;

        case 2:
            id = prompt("Digite o id: ");
            let novoNome = prompt("Digite o novo nome: ");
            let novoIngredientes = prompt("Digite novo ingredientes: ");
            let novoPassosPreparo = prompt("Digite o novo passo a passo: ");
            let novoTempoPreparo = prompt("Digite o novo tempo de preparo: ");
            let novoDificuldades = prompt("Digite as novas dificuldades: ");
            let novoPorcoes = prompt("Digite as novas porcões: ");
            let novoAutor = prompt("Digite o novo autor: ");
            editarReceitas(id, novoNome, novoIngredientes, novoPassosPreparo, novoTempoPreparo, novoDificuldades, novoPorcoes, novoAutor);
            listarReceitas();
            break;

        case 3:
            id = prompt("Digite id a ser editada: ");
            excluirReceitas(id);
            break;

        case 4:
            listarReceitas();
            break;

        case 5:
            excluirTodasReceitas()
            break;

        case 9:
            console.log("Saindo do sistema ...")
            break;

        default:
            console.log("Valor inválido!")
            break;

    }
} while (opcao !== 9);

module.exports = { exibirMenu };


//function criarReceitas(id, nome, ingredientes, passosPreparo, tempoPreparo, dificuldades, porcoes, autor)

// criarReceitas(10, "bolo", "ovos-açucar-manteiga-farinhaTrigo-sal", "bater manteiga com açucar e ovos- depois restante", 
//     "40 min", "fogo medio", "1- mateiga 2-açucar 3-farinha trigo 4-ovos", "Sergio" )

// criarReceitas(11, "macarronada", "macarrão-óleo-alho-sal", "cozinhar o macarrão na agua com uma colher de òleo ",
//      "20 min", "fogo medio", "não deixar faltar agua", "Gabriel")

// criarReceitas(15, "ovo frito", "ovo-óleo-sal", "esquentar óleo - colocar o ovo qdo fever óleo",
//     "1 min", "fogo medio", "não deixar faltar óleo", "Maria")


// listarReceitas()

// editarReceitas(15, "ovo frito", "ovo-óleo-sal", "esquentar óleo - colocar o ovo qdo fever óleo",
//     "1 min", "fogo medio", "não deixar faltar óleo", "João")

// listarReceitas()

// excluirReceitas(15)

// listarReceitas()


//criarReceitas(10, "bolo", "ovos-açucar-manteiga-farinhaTrigo-sal", "bater manteiga com açucar e ovos- depois restante", "40 min", "fogo medio", "1- mateiga 2-açucar 3-farinha trigo 4-ovos", "Sergio" )
// criarAluno("1012", "Sergio Cunha", "segiocunha@gmail.com", 981518033)
// criarAluno("1015", "Gabriel Dias", "gabrieldias@gmail.com", 98885511)

// listarAluno()

// editarAluno("1015", "Gabriel", "gabrieldias@gmail.com", 98885511)
// listarAluno()

// excluirAluno("1015")
// listarAluno();
