let vendas = [

    {
        id: 1,
        vendedor: "Carlos",
        produto: "Notebook",
        valor: 3500
    },

    {
        id: 2,
        vendedor: "Ana",
        produto: "Mouse",
        valor: 150
    },

    {
        id: 3,
        vendedor: "João",
        produto: "Teclado",
        valor: 300
    },

    {
        id: 4,
        vendedor: "Maria",
        produto: "Monitor",
        valor: 1200
    },

    {
        id: 5,
        vendedor: "Carlos",
        produto: "Headset",
        valor: 450
    },

    {
        id: 6,
        vendedor: "Ana",
        produto: "Notebook",
        valor: 2800
    },

    {
        id: 7,
        vendedor: "João",
        produto: "Mouse",
        valor: 200
    },

    {
        id: 8,
        vendedor: "Maria",
        produto: "Teclado",
        valor: 350
    },

    {
        id: 9,
        vendedor: "Carlos",
        produto: "Monitor",
        valor: 1500
    },

    {
        id: 10,
        vendedor: "Ana",
        produto: "Headset",
        valor: 500
    },

    {
        id: 11,
        vendedor: "João",
        produto: "Notebook",
        valor: 3200
    },

    {
        id: 12,
        vendedor: "Maria",
        produto: "Mouse",
        valor: 180
    },

    {
        id: 13,
        vendedor: "Carlos",
        produto: "Teclado",
        valor: 400
    },

    {
        id: 14,
        vendedor: "Ana",
        produto: "Monitor",
        valor: 1300
    },

    {
        id: 15,
        vendedor: "João",
        produto: "Headset",
        valor: 550
    }

];


let dashboard = document.getElementById("dashboard");


let titulo = document.createElement("h1");

titulo.textContent = "Dashboard de Vendas";

dashboard.appendChild(titulo);


let pesquisa = document.createElement("input");

pesquisa.type = "text";

pesquisa.placeholder = "Pesquisar vendedor...";

dashboard.appendChild(pesquisa);


let resumo = document.createElement("div");

resumo.classList.add("resumo");

dashboard.appendChild(resumo);


let tabela = document.createElement("table");

dashboard.appendChild(tabela);


let cabecalho = document.createElement("thead");

tabela.appendChild(cabecalho);


let linhaCabecalho = document.createElement("tr");

cabecalho.appendChild(linhaCabecalho);


let colunas = [
    "ID",
    "Vendedor",
    "Produto",
    "Valor"
];


colunas.forEach(function(coluna) {

    let th = document.createElement("th");

    th.textContent = coluna;

    linhaCabecalho.appendChild(th);

});


let corpoTabela = document.createElement("tbody");

tabela.appendChild(corpoTabela);


function mostrarDashboard(lista) {

    corpoTabela.innerHTML = "";

    resumo.innerHTML = "";


    if (lista.length === 0) {

        let mensagem = document.createElement("p");

        mensagem.textContent = "Nenhuma venda encontrada.";

        corpoTabela.appendChild(mensagem);

        return;

    }


    lista.forEach(function(venda) {

        let linha = document.createElement("tr");


        let tdId = document.createElement("td");

        tdId.textContent = venda.id;

        linha.appendChild(tdId);


        let tdVendedor = document.createElement("td");

        tdVendedor.textContent = venda.vendedor;

        linha.appendChild(tdVendedor);


        let tdProduto = document.createElement("td");

        tdProduto.textContent = venda.produto;

        linha.appendChild(tdProduto);


        let tdValor = document.createElement("td");

        tdValor.textContent =
            "R$ " + venda.valor.toFixed(2);

        linha.appendChild(tdValor);


        corpoTabela.appendChild(linha);

    });


    let total = 0;


    lista.forEach(function(venda) {

        total = total + venda.valor;

    });


    let maior = lista[0];

    let menor = lista[0];


    lista.forEach(function(venda) {

        if (venda.valor > maior.valor) {

            maior = venda;

        }


        if (venda.valor < menor.valor) {

            menor = venda;

        }

    });


    let media = total / lista.length;


    criarCard(
        "Total vendido",
        "R$ " + total.toFixed(2)
    );


    criarCard(
        "Maior venda",
        "R$ " + maior.valor.toFixed(2)
    );


    criarCard(
        "Menor venda",
        "R$ " + menor.valor.toFixed(2)
    );


    criarCard(
        "Média das vendas",
        "R$ " + media.toFixed(2)
    );


    criarCard(
        "Quantidade de vendas",
        lista.length
    );

}


function criarCard(tituloCard, valorCard) {

    let card = document.createElement("div");

    card.classList.add("card");


    let titulo = document.createElement("h3");

    titulo.textContent = tituloCard;

    card.appendChild(titulo);


    let valor = document.createElement("p");

    valor.textContent = valorCard;

    card.appendChild(valor);


    resumo.appendChild(card);

}


pesquisa.addEventListener("input", function() {

    let texto = pesquisa.value.toLowerCase();


    let vendasFiltradas = vendas.filter(function(venda) {

        return venda.vendedor.toLowerCase().includes(texto);

    });


    mostrarDashboard(vendasFiltradas);

});


mostrarDashboard(vendas);