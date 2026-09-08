let perguntas = [

    {
        pergunta: "O que significa HTML?",
        alternativas: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        respostaCorreta: 0
    },

    {
        pergunta: "Qual palavra usamos para criar uma variável que pode ser alterada?",
        alternativas: [
            "const",
            "let",
            "fixed",
            "static"
        ],
        respostaCorreta: 1
    },

    {
        pergunta: "Qual comando mostra uma mensagem no console?",
        alternativas: [
            "console.log()",
            "print()",
            "show()",
            "write()"
        ],
        respostaCorreta: 0
    },

    {
        pergunta: "Qual símbolo usamos para comentário de uma linha em JavaScript?",
        alternativas: [
            "##",
            "<!--",
            "//",
            "**"
        ],
        respostaCorreta: 2
    },

    {
        pergunta: "Qual método adiciona um elemento ao final de um array?",
        alternativas: [
            "add()",
            "push()",
            "insert()",
            "addEnd()"
        ],
        respostaCorreta: 1
    },

    {
        pergunta: "Qual comando usamos para criar uma função?",
        alternativas: [
            "function",
            "func",
            "create",
            "def"
        ],
        respostaCorreta: 0
    },

    {
        pergunta: "Qual evento acontece quando o usuário clica em um elemento?",
        alternativas: [
            "hover",
            "input",
            "click",
            "change"
        ],
        respostaCorreta: 2
    },

    {
        pergunta: "Qual método usamos para selecionar um elemento pelo ID?",
        alternativas: [
            "getElementById()",
            "getById()",
            "selectId()",
            "findId()"
        ],
        respostaCorreta: 0
    },

    {
        pergunta: "Qual tipo de dado representa verdadeiro ou falso?",
        alternativas: [
            "String",
            "Number",
            "Boolean",
            "Array"
        ],
        respostaCorreta: 2
    },

    {
        pergunta: "Qual operador usamos para somar dois números?",
        alternativas: [
            "*",
            "+",
            "/",
            "%"
        ],
        respostaCorreta: 1
    }

];


let perguntaAtual = 0;

let pontuacao = 0;

let respostaSelecionada = null;


let quiz = document.getElementById("quiz");


function mostrarPergunta() {

    quiz.innerHTML = "";

    let pergunta = perguntas[perguntaAtual];


    let titulo = document.createElement("h1");

    titulo.textContent = "Quiz de JavaScript";

    quiz.appendChild(titulo);


    let indicador = document.createElement("p");

    indicador.textContent =
        "Pergunta " +
        (perguntaAtual + 1) +
        " de " +
        perguntas.length;

    quiz.appendChild(indicador);


    let enunciado = document.createElement("h2");

    enunciado.textContent = pergunta.pergunta;

    quiz.appendChild(enunciado);


    let alternativas = document.createElement("div");

    alternativas.classList.add("alternativas");

    quiz.appendChild(alternativas);


    pergunta.alternativas.forEach(function(alternativa, indice) {

        let botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.classList.add("alternativa");


        botao.addEventListener("click", function() {

            respostaSelecionada = indice;

            marcarAlternativa(botao);

        });


        alternativas.appendChild(botao);

    });


    let pontuacaoTexto = document.createElement("p");

    pontuacaoTexto.textContent =
        "Pontuação: " + pontuacao;

    quiz.appendChild(pontuacaoTexto);


    let proxima = document.createElement("button");

    proxima.textContent = "Próxima";

    proxima.id = "proxima";

    proxima.addEventListener("click", proximaPergunta);

    quiz.appendChild(proxima);

}


function marcarAlternativa(botaoEscolhido) {

    let botoes = document.querySelectorAll(".alternativa");


    botoes.forEach(function(botao) {

        botao.classList.remove("selecionada");

    });


    botaoEscolhido.classList.add("selecionada");

}


function proximaPergunta() {

    if (respostaSelecionada === null) {

        alert("Escolha uma alternativa.");

        return;

    }


    let pergunta = perguntas[perguntaAtual];


    if (respostaSelecionada === pergunta.respostaCorreta) {

        pontuacao++;

    }


    perguntaAtual++;

    respostaSelecionada = null;


    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

}


function mostrarResultado() {

    quiz.innerHTML = "";


    let acertos = pontuacao;

    let erros = perguntas.length - acertos;


    let percentual =
        (acertos / perguntas.length) * 100;


    let resultado = document.createElement("div");

    resultado.id = "resultado";


    let titulo = document.createElement("h1");

    titulo.textContent = "Resultado final";

    resultado.appendChild(titulo);


    let textoAcertos = document.createElement("p");

    textoAcertos.textContent =
        "Quantidade de acertos: " + acertos;

    resultado.appendChild(textoAcertos);


    let textoErros = document.createElement("p");

    textoErros.textContent =
        "Quantidade de erros: " + erros;

    resultado.appendChild(textoErros);


    let textoPercentual = document.createElement("p");

    textoPercentual.textContent =
        "Percentual de aproveitamento: " +
        percentual.toFixed(2) +
        "%";

    resultado.appendChild(textoPercentual);


    let reiniciar = document.createElement("button");

    reiniciar.textContent = "Reiniciar quiz";

    reiniciar.id = "reiniciar";

    reiniciar.addEventListener("click", reiniciarQuiz);

    resultado.appendChild(reiniciar);


    quiz.appendChild(resultado);

}


function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    respostaSelecionada = null;

    mostrarPergunta();

}


mostrarPergunta();