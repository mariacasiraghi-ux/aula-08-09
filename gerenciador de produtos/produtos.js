formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    mensagem.textContent = "";


    let nomeProduto = nome.value.trim();

    let precoProduto = Number(preco.value);

    let quantidadeProduto = Number(quantidade.value);


    if (nomeProduto === "") {

        mensagem.textContent = "Digite o nome do produto.";

        return;
    }


    if (preco.value === "" || precoProduto <= 0) {

        mensagem.textContent = "Digite um preço válido.";

        return;
    }


    if (quantidade.value === "" || quantidadeProduto < 0) {

        mensagem.textContent = "Digite uma quantidade válida.";

        return;
    }


    let produto = {

        id: proximoId,

        nome: nomeProduto,

        preco: precoProduto,

        quantidade: quantidadeProduto

    };


    produtos.push(produto);


    proximoId++;


    mostrarProdutos();

    atualizarResumo();


    formulario.reset();

});