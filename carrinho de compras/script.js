

// Cria uma lista vazia
let carrinho = [];


// Função para adicionar um produto
function adicionar(nome, preco) {

    // Coloca o produto dentro do carrinho
    carrinho.push({

        nome: nome,

        preco: preco
    });


    // Atualiza o carrinho
    mostrarCarrinho();
}



// Função para mostrar o carrinho
function mostrarCarrinho() {

    // Pega a lista do HTML
    let lista = document.getElementById("listaCarrinho");


    // Limpa a lista
    lista.innerHTML = "";


    // Começa o total em zero
    let total = 0;


    // Percorre todos os produtos
    carrinho.forEach(function(produto, indice) {


        // Cria um item <li>
        let item = document.createElement("li");


        // Mostra o nome e o preço
        item.textContent =
            produto.nome +
            " - R$ " +
            produto.preco.toFixed(2).replace(".", ",");


        // Cria o botão Remover
        let botao = document.createElement("button");


        // Coloca o texto no botão
        botao.textContent = "Remover";


        // Quando clicar no botão
        botao.onclick = function() {


            // Remove o produto
            carrinho.splice(indice, 1);


            // Atualiza o carrinho
            mostrarCarrinho();

        };


        // Coloca o botão dentro do item
        item.appendChild(botao);


        // Coloca o item dentro da lista
        lista.appendChild(item);


        // Soma o preço
        total = total + produto.preco;

    });


    // Mostra a quantidade de produtos
    document.getElementById("quantidade").textContent =
        carrinho.length;


    // Mostra o valor total
    document.getElementById("total").textContent =
        total.toFixed(2).replace(".", ",");
}

