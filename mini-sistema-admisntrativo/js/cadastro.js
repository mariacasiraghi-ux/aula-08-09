// Lista de produtos

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];


// Salvar os produtos no localStorage

function salvarProdutos() {

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

}


// Função que será usada pelos outros arquivos

export function getProdutos() {

    return produtos;

}


// Função para excluir produto

export function excluirProduto(id) {

    produtos = produtos.filter(function (produto) {

        return produto.id !== id;

    });

    salvarProdutos();

    // Avisar que os produtos foram alterados

    window.dispatchEvent(
        new Event("produtosAtualizados")
    );

}


// Criar o cadastro

function criarCadastro() {

    const cadastro = document.getElementById("cadastro");


    cadastro.innerHTML = `

        <h2>Cadastro de Produtos</h2>

        <form id="formCadastro">

            <input
                type="text"
                id="nome"
                placeholder="Nome do produto"
                required
            >

            <input
                type="text"
                id="categoria"
                placeholder="Categoria"
                required
            >

            <input
                type="number"
                id="preco"
                placeholder="Preço"
                step="0.01"
                min="0"
                required
            >

            <input
                type="number"
                id="estoque"
                placeholder="Estoque"
                min="0"
                required
            >

            <button type="submit">
                Cadastrar
            </button>

        </form>

    `;


    const formulario =
        document.getElementById("formCadastro");


    // Evento de cadastro

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nome =
                document.getElementById("nome").value;

            const categoria =
                document.getElementById("categoria").value;

            const preco =
                Number(
                    document.getElementById("preco").value
                );

            const estoque =
                Number(
                    document.getElementById("estoque").value
                );


            // Criar produto

            const novoProduto = {

                id: Date.now(),

                nome: nome,

                categoria: categoria,

                preco: preco,

                estoque: estoque

            };


            // Adicionar produto

            produtos.push(novoProduto);


            // Salvar

            salvarProdutos();


            // Limpar formulário

            formulario.reset();


            // Atualizar os outros componentes

            window.dispatchEvent(
                new Event("produtosAtualizados")
            );

        }
    );

}


// Iniciar cadastro

criarCadastro();