// Lista onde vamos guardar os produtos
let produtos = [];


// ID que será usado para cada produto
let proximoId = 1;


// Pegando os elementos do HTML
let formulario = document.getElementById("formulario");

let nome = document.getElementById("nome");

let preco = document.getElementById("preco");

let quantidade = document.getElementById("quantidade");

let tabelaProdutos = document.getElementById("tabelaProdutos");

let pesquisa = document.getElementById("pesquisa");

let mensagem = document.getElementById("mensagem");

let totalEstoque = document.getElementById("totalEstoque");

let quantidadeTotal = document.getElementById("quantidadeTotal");

let maiorPreco = document.getElementById("maiorPreco");

let menorPreco = document.getElementById("menorPreco");


// Verifica quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();


    // Limpa mensagem anterior
    mensagem.textContent = "";


    // Pega os valores digitados
    let nomeProduto = nome.value.trim();

    let precoProduto = Number(preco.value);

    let quantidadeProduto = Number(quantidade.value);


    // Verifica o nome
    if (nomeProduto === "") {

        mensagem.textContent = "Digite o nome do produto.";

        return;
    }


    // Verifica o preço
    if (preco.value === "" || precoProduto <= 0) {

        mensagem.textContent = "Digite um preço válido.";

        return;
    }


    // Verifica a quantidade
    if (quantidade.value === "" || quantidadeProduto < 0) {

        mensagem.textContent = "Digite uma quantidade válida.";

        return;
    }


    // Cria o produto
    let produto = {

        id: proximoId,

        nome: nomeProduto,

        preco: precoProduto,

        quantidade: quantidadeProduto

    };


    // Adiciona o produto na lista
    produtos.push(produto);


    // Aumenta o próximo ID
    proximoId++;


    // Atualiza a tabela
    mostrarProdutos();


    // Atualiza o resumo
    atualizarResumo();


    // Limpa os campos
    formulario.reset();

});

function mostrarProdutos() {

    // Limpa a tabela
    tabelaProdutos.innerHTML = "";


    // Pega o texto da pesquisa
    let textoPesquisa = pesquisa.value.toLowerCase();


    // Percorre todos os produtos
    for (let produto of produtos) {

        // Verifica se o nome combina com a pesquisa
        if (
            produto.nome.toLowerCase().includes(textoPesquisa)
        ) {

            // Cria uma linha
            let linha = document.createElement("tr");


            // ID
            let tdId = document.createElement("td");

            tdId.textContent = produto.id;

            linha.appendChild(tdId);


            // Nome
            let tdNome = document.createElement("td");

            tdNome.textContent = produto.nome;

            linha.appendChild(tdNome);


            // Preço
            let tdPreco = document.createElement("td");

            tdPreco.textContent =
                "R$ " + produto.preco.toFixed(2);

            linha.appendChild(tdPreco);


            // Quantidade
            let tdQuantidade = document.createElement("td");

            tdQuantidade.textContent = produto.quantidade;

            linha.appendChild(tdQuantidade);


            // Coluna das ações
            let tdAcoes = document.createElement("td");


            // Botão editar
            let botaoEditar = document.createElement("button");

            botaoEditar.textContent = "Editar";


            botaoEditar.addEventListener("click", function() {

                editarProduto(produto.id);

            });


            tdAcoes.appendChild(botaoEditar);


            // Botão excluir
            let botaoExcluir = document.createElement("button");

            botaoExcluir.textContent = "Excluir";


            botaoExcluir.addEventListener("click", function() {

                excluirProduto(produto.id);

            });


            tdAcoes.appendChild(botaoExcluir);


            // Coloca as ações na linha
            linha.appendChild(tdAcoes);


            // Coloca a linha na tabela
            tabelaProdutos.appendChild(linha);

        }

    }

}