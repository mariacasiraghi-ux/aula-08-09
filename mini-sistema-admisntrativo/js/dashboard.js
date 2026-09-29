import {
    getProdutos
} from "./cadastro.js";


// Mostrar dashboard

function mostrarDashboard() {

    const dashboard =
        document.getElementById("dashboard");


    const produtos = getProdutos();


    // Se não houver produtos

    if (produtos.length === 0) {

        dashboard.innerHTML = `

            <h2>Dashboard</h2>

            <p>
                Nenhum produto cadastrado.
            </p>

        `;

        return;

    }


    // Total de produtos

    const totalProdutos =
        produtos.length;


    // Quantidade total em estoque

    const quantidadeEstoque =
        produtos.reduce(
            function (total, produto) {

                return total + produto.estoque;

            },
            0
        );


    // Valor total do estoque

    const valorEstoque =
        produtos.reduce(
            function (total, produto) {

                return total +
                    (
                        produto.preco *
                        produto.estoque
                    );

            },
            0
        );


    // Produto mais caro

    const produtoMaisCaro =
        produtos.reduce(
            function (maior, produto) {

                if (
                    produto.preco >
                    maior.preco
                ) {

                    return produto;

                }

                return maior;

            }
        );


    // Produto mais barato

    const produtoMaisBarato =
        produtos.reduce(
            function (menor, produto) {

                if (
                    produto.preco <
                    menor.preco
                ) {

                    return produto;

                }

                return menor;

            }
        );


    // Mostrar informações

    dashboard.innerHTML = `

        <h2>Dashboard</h2>


        <div class="dashboard">


            <div class="card">

                <h3>
                    Total de produtos
                </h3>

                <p>
                    ${totalProdutos}
                </p>

            </div>


            <div class="card">

                <h3>
                    Valor total do estoque
                </h3>

                <p>
                    R$ ${valorEstoque.toFixed(2)}
                </p>

            </div>


            <div class="card">

                <h3>
                    Produto mais caro
                </h3>

                <p>
                    ${produtoMaisCaro.nome}
                </p>

                <p>
                    R$ ${produtoMaisCaro.preco.toFixed(2)}
                </p>

            </div>


            <div class="card">

                <h3>
                    Produto mais barato
                </h3>

                <p>
                    ${produtoMaisBarato.nome}
                </p>

                <p>
                    R$ ${produtoMaisBarato.preco.toFixed(2)}
                </p>

            </div>


            <div class="card">

                <h3>
                    Quantidade total em estoque
                </h3>

                <p>
                    ${quantidadeEstoque}
                </p>

            </div>


        </div>

    `;

}


// Atualizar dashboard

window.addEventListener(
    "produtosAtualizados",
    function () {

        mostrarDashboard();

    }
);


// Iniciar

mostrarDashboard();