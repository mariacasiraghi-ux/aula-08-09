import {
    getProdutos,
    excluirProduto
} from "./cadastro.js";


// Criar a área de listagem

function mostrarListagem() {

    const listagem =
        document.getElementById("listagem");


    listagem.innerHTML = `

        <h2>Lista de Produtos</h2>

        <input
            type="text"
            id="pesquisa"
            placeholder="Pesquisar produto..."
        >


        <select id="filtroCategoria">

            <option value="">
                Todas as categorias
            </option>

        </select>


        <select id="ordenacao">

            <option value="">
                Ordenar por preço
            </option>

            <option value="menor">
                Menor preço
            </option>

            <option value="maior">
                Maior preço
            </option>

        </select>


        <div id="tabelaProdutos"></div>

    `;


    atualizarCategorias();

    mostrarTabela();


    // Pesquisa

    document
        .getElementById("pesquisa")
        .addEventListener(
            "input",
            mostrarTabela
        );


    // Filtro

    document
        .getElementById("filtroCategoria")
        .addEventListener(
            "change",
            mostrarTabela
        );


    // Ordenação

    document
        .getElementById("ordenacao")
        .addEventListener(
            "change",
            mostrarTabela
        );

}


// Criar as categorias

function atualizarCategorias() {

    const select =
        document.getElementById("filtroCategoria");


    const produtos = getProdutos();


    const categorias = [];


    produtos.forEach(function (produto) {

        if (!categorias.includes(produto.categoria)) {

            categorias.push(
                produto.categoria
            );

        }

    });


    categorias.sort();


    select.innerHTML = `

        <option value="">
            Todas as categorias
        </option>

    `;


    categorias.forEach(function (categoria) {

        select.innerHTML += `

            <option value="${categoria}">
                ${categoria}
            </option>

        `;

    });

}


// Mostrar tabela

function mostrarTabela() {

    const produtos = getProdutos();


    const pesquisa =
        document
            .getElementById("pesquisa")
            .value
            .toLowerCase();


    const categoria =
        document
            .getElementById("filtroCategoria")
            .value;


    const ordenacao =
        document
            .getElementById("ordenacao")
            .value;


    // Filtrar produtos

    let produtosFiltrados =
        produtos.filter(function (produto) {

            const nomeCombina =
                produto.nome
                    .toLowerCase()
                    .includes(pesquisa);


            const categoriaCombina =
                categoria === "" ||
                produto.categoria === categoria;


            return (
                nomeCombina &&
                categoriaCombina
            );

        });


    // Ordenar do menor para o maior

    if (ordenacao === "menor") {

        produtosFiltrados.sort(
            function (a, b) {

                return a.preco - b.preco;

            }
        );

    }


    // Ordenar do maior para o menor

    if (ordenacao === "maior") {

        produtosFiltrados.sort(
            function (a, b) {

                return b.preco - a.preco;

            }
        );

    }


    const tabela =
        document.getElementById("tabelaProdutos");


    // Se não encontrar produtos

    if (produtosFiltrados.length === 0) {

        tabela.innerHTML = `

            <p>
                Nenhum produto encontrado.
            </p>

        `;

        return;

    }


    // Criar tabela

    tabela.innerHTML = `

        <table>

            <thead>

                <tr>

                    <th>Nome</th>

                    <th>Categoria</th>

                    <th>Preço</th>

                    <th>Estoque</th>

                    <th>Ação</th>

                </tr>

            </thead>


            <tbody>

                ${produtosFiltrados
                    .map(function (produto) {

                        return `

                            <tr>

                                <td>
                                    ${produto.nome}
                                </td>

                                <td>
                                    ${produto.categoria}
                                </td>

                                <td>
                                    R$ ${produto.preco.toFixed(2)}
                                </td>

                                <td>
                                    ${produto.estoque}
                                </td>

                                <td>

                                    <button
                                        class="btnExcluir"
                                        data-id="${produto.id}"
                                    >
                                        Excluir
                                    </button>

                                </td>

                            </tr>

                        `;

                    })
                    .join("")}

            </tbody>

        </table>

    `;


    // Pegar os botões de excluir

    const botoes =
        document.querySelectorAll(
            ".btnExcluir"
        );


    botoes.forEach(function (botao) {

        botao.addEventListener(
            "click",
            function () {

                const id =
                    Number(botao.dataset.id);


                excluirProduto(id);

            }
        );

    });

}


// Atualizar quando houver alteração

window.addEventListener(
    "produtosAtualizados",
    function () {

        mostrarListagem();

    }
);


// Iniciar

mostrarListagem();