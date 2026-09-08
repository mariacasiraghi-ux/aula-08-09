let chamados = [];

let proximoId = 1;

let chamadoAtual = 0;


let container = document.getElementById("chamados");


let formulario = document.createElement("form");

container.appendChild(formulario);


let titulo = document.createElement("h1");

titulo.textContent = "Sistema de Chamados";

container.insertBefore(titulo, formulario);


let nome = document.createElement("input");

nome.type = "text";

nome.placeholder = "Nome do solicitante";

formulario.appendChild(nome);


let problema = document.createElement("textarea");

problema.placeholder = "Descrição do problema";

formulario.appendChild(problema);


let prioridade = document.createElement("select");


let opcaoBaixa = document.createElement("option");

opcaoBaixa.value = "Baixa";

opcaoBaixa.textContent = "Baixa";

prioridade.appendChild(opcaoBaixa);


let opcaoMedia = document.createElement("option");

opcaoMedia.value = "Média";

opcaoMedia.textContent = "Média";

prioridade.appendChild(opcaoMedia);


let opcaoAlta = document.createElement("option");

opcaoAlta.value = "Alta";

opcaoAlta.textContent = "Alta";

prioridade.appendChild(opcaoAlta);


let opcaoCritica = document.createElement("option");

opcaoCritica.value = "Crítica";

opcaoCritica.textContent = "Crítica";

prioridade.appendChild(opcaoCritica);


formulario.appendChild(prioridade);


let botaoAbrir = document.createElement("button");

botaoAbrir.type = "submit";

botaoAbrir.textContent = "Abrir chamado";

formulario.appendChild(botaoAbrir);


let mensagem = document.createElement("p");

mensagem.id = "mensagem";

container.appendChild(mensagem);


let tabela = document.createElement("table");

container.appendChild(tabela);


let cabecalho = document.createElement("thead");

tabela.appendChild(cabecalho);


let linhaCabecalho = document.createElement("tr");

cabecalho.appendChild(linhaCabecalho);


let colunas = [
    "ID",
    "Solicitante",
    "Problema",
    "Prioridade",
    "Status",
    "Ação"
];


colunas.forEach(function(coluna) {

    let th = document.createElement("th");

    th.textContent = coluna;

    linhaCabecalho.appendChild(th);

});


let corpoTabela = document.createElement("tbody");

tabela.appendChild(corpoTabela);


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    mensagem.textContent = "";


    let nomeSolicitante = nome.value.trim();

    let descricao = problema.value.trim();

    let prioridadeEscolhida = prioridade.value;


    if (nomeSolicitante === "") {

        mensagem.textContent =
            "Digite o nome do solicitante.";

        return;
    }


    if (descricao === "") {

        mensagem.textContent =
            "Digite a descrição do problema.";

        return;
    }


    let novoChamado = {

        id: proximoId,

        solicitante: nomeSolicitante,

        problema: descricao,

        prioridade: prioridadeEscolhida,

        status: "Aberto"

    };


    chamados.push(novoChamado);

    proximoId++;


    mostrarChamados();


    formulario.reset();

});


function mostrarChamados() {

    corpoTabela.innerHTML = "";


    chamados.forEach(function(chamado) {

        let linha = document.createElement("tr");


        let tdId = document.createElement("td");

        tdId.textContent = chamado.id;

        linha.appendChild(tdId);


        let tdSolicitante = document.createElement("td");

        tdSolicitante.textContent = chamado.solicitante;

        linha.appendChild(tdSolicitante);


        let tdProblema = document.createElement("td");

        tdProblema.textContent = chamado.problema;

        linha.appendChild(tdProblema);


        let tdPrioridade = document.createElement("td");

        tdPrioridade.textContent = chamado.prioridade;

        linha.appendChild(tdPrioridade);


        let tdStatus = document.createElement("td");

        tdStatus.textContent = chamado.status;

        tdStatus.classList.add("status");

        linha.appendChild(tdStatus);


        let tdAcoes = document.createElement("td");

        tdAcoes.classList.add("acoes");


        let botaoStatus = document.createElement("button");

        botaoStatus.textContent = "Alterar status";


        botaoStatus.addEventListener("click", function() {

            alterarStatus(chamado.id);

        });


        tdAcoes.appendChild(botaoStatus);


        let botaoExcluir = document.createElement("button");

        botaoExcluir.textContent = "Excluir";


        botaoExcluir.addEventListener("click", function() {

            excluirChamado(chamado.id);

        });


        tdAcoes.appendChild(botaoExcluir);


        linha.appendChild(tdAcoes);


        corpoTabela.appendChild(linha);

    });

}


function alterarStatus(id) {

    let chamado = chamados.find(function(item) {

        return item.id === id;

    });


    if (!chamado) {

        return;

    }


    if (chamado.status === "Aberto") {

        chamado.status = "Em atendimento";

    } else if (chamado.status === "Em atendimento") {

        chamado.status = "Resolvido";

    } else {

        chamado.status = "Aberto";

    }


    mostrarChamados();

}


function excluirChamado(id) {

    chamados = chamados.filter(function(chamado) {

        return chamado.id !== id;

    });


    mostrarChamados();

}