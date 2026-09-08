// Pega a div que está no HTML
let area = document.getElementById("exercicio8");


// Cria uma div para o sistema inteiro
let container = document.createElement("div");

container.className = "container";

area.appendChild(container);


// Cria o título
let titulo = document.createElement("h1");

titulo.textContent = "Sistema de Notas";

container.appendChild(titulo);


// -------------------------
// CAMPO NOME
// -------------------------

let nome = document.createElement("input");

nome.type = "text";

nome.placeholder = "Nome do aluno";

container.appendChild(nome);


// -------------------------
// NOTA 1
// -------------------------

let nota1 = document.createElement("input");

nota1.type = "number";

nota1.placeholder = "Nota 1";

nota1.min = "0";

nota1.max = "100";

container.appendChild(nota1);


// -------------------------
// NOTA 2
// -------------------------

let nota2 = document.createElement("input");

nota2.type = "number";

nota2.placeholder = "Nota 2";

nota2.min = "0";

nota2.max = "100";

container.appendChild(nota2);


// -------------------------
// NOTA 3
// -------------------------

let nota3 = document.createElement("input");

nota3.type = "number";

nota3.placeholder = "Nota 3";

nota3.min = "0";

nota3.max = "100";

container.appendChild(nota3);


// -------------------------
// BOTÃO
// -------------------------

let botao = document.createElement("button");

botao.textContent = "Adicionar aluno";

container.appendChild(botao);


// -------------------------
// MENSAGEM DE ERRO
// -------------------------

let mensagem = document.createElement("div");

mensagem.className = "erro";

container.appendChild(mensagem);


// -------------------------
// TABELA
// -------------------------

let tabela = document.createElement("table");

container.appendChild(tabela);


// Cabeçalho da tabela
let cabecalho = document.createElement("tr");

tabela.appendChild(cabecalho);


// Colunas
let colunas = [
    "Nome",
    "Nota 1",
    "Nota 2",
    "Nota 3",
    "Média",
    "Situação"
];


// Cria cada coluna
for (let coluna of colunas) {

    let th = document.createElement("th");

    th.textContent = coluna;

    cabecalho.appendChild(th);
}


// -------------------------
// RESUMO
// -------------------------

let resumo = document.createElement("div");

resumo.className = "resumo";

container.appendChild(resumo);


// Lista onde vamos guardar os alunos
let alunos = [];


// -------------------------
// BOTÃO ADICIONAR
// -------------------------

botao.addEventListener("click", function() {

    // Limpa mensagem anterior
    mensagem.textContent = "";


    // Pega o nome digitado
    let nomeAluno = nome.value.trim();


    // Pega as notas
    let n1 = Number(nota1.value);

    let n2 = Number(nota2.value);

    let n3 = Number(nota3.value);


    // Verifica o nome
    if (nomeAluno === "") {

        mensagem.textContent = "Digite o nome do aluno.";

        return;
    }


    // Verifica se as notas são válidas
    if (
        nota1.value === "" ||
        nota2.value === "" ||
        nota3.value === ""
    ) {

        mensagem.textContent = "Digite as três notas.";

        return;
    }


    // Verifica se as notas estão entre 0 e 100
    if (
        n1 < 0 || n1 > 100 ||
        n2 < 0 || n2 > 100 ||
        n3 < 0 || n3 > 100
    ) {

        mensagem.textContent =
            "As notas devem estar entre 0 e 100.";

        return;
    }


    // Calcula a média
    let media = (n1 + n2 + n3) / 3;


    // Define a situação
    let situacao;

    if (media >= 60) {

        situacao = "Aprovado";

    } else {

        situacao = "Reprovado";
    }


    // Cria um objeto com os dados do aluno
    let aluno = {

        nome: nomeAluno,

        nota1: n1,

        nota2: n2,

        nota3: n3,

        media: media,

        situacao: situacao
    };


    // Coloca o aluno na lista
    alunos.push(aluno);


    // Adiciona o aluno na tabela
    adicionarNaTabela(aluno);


    // Atualiza o resumo
    atualizarResumo();


    // Limpa os campos
    nome.value = "";

    nota1.value = "";

    nota2.value = "";

    nota3.value = "";

});


// -------------------------
// FUNÇÃO PARA TABELA
// -------------------------

function adicionarNaTabela(aluno) {

    // Cria uma nova linha
    let linha = document.createElement("tr");

    tabela.appendChild(linha);


    // Nome
    let tdNome = document.createElement("td");

    tdNome.textContent = aluno.nome;

    linha.appendChild(tdNome);


    // Nota 1
    let tdNota1 = document.createElement("td");

    tdNota1.textContent = aluno.nota1;

    linha.appendChild(tdNota1);


    // Nota 2
    let tdNota2 = document.createElement("td");

    tdNota2.textContent = aluno.nota2;

    linha.appendChild(tdNota2);


    // Nota 3
    let tdNota3 = document.createElement("td");

    tdNota3.textContent = aluno.nota3;

    linha.appendChild(tdNota3);


    // Média
    let tdMedia = document.createElement("td");

    tdMedia.textContent = aluno.media.toFixed(2);

    linha.appendChild(tdMedia);


    // Situação
    let tdSituacao = document.createElement("td");

    tdSituacao.textContent = aluno.situacao;

    linha.appendChild(tdSituacao);
}


// -------------------------
// FUNÇÃO DO RESUMO
// -------------------------

function atualizarResumo() {

    // Quantidade de alunos
    let quantidade = alunos.length;


    // Contadores
    let aprovados = 0;

    let reprovados = 0;


    // Verifica cada aluno
    for (let aluno of alunos) {

        if (aluno.situacao === "Aprovado") {

            aprovados++;

        } else {

            reprovados++;
        }
    }


    // Maior e menor média
    let maiorMedia = 0;

    let menorMedia = 0;


    if (alunos.length > 0) {

        maiorMedia = alunos[0].media;

        menorMedia = alunos[0].media;


        for (let aluno of alunos) {

            if (aluno.media > maiorMedia) {

                maiorMedia = aluno.media;
            }


            if (aluno.media < menorMedia) {

                menorMedia = aluno.media;
            }
        }
    }


    // Calcula a soma das médias
    let somaMedias = 0;


    for (let aluno of alunos) {

        somaMedias += aluno.media;
    }


    // Calcula a média geral
    let mediaGeral = 0;


    if (alunos.length > 0) {

        mediaGeral = somaMedias / alunos.length;
    }


    // Mostra os resultados
    resumo.innerHTML =

        "Quantidade de alunos: " + quantidade + "<br>" +

        "Quantidade de aprovados: " + aprovados + "<br>" +

        "Quantidade de reprovados: " + reprovados + "<br>" +

        "Maior média: " + maiorMedia.toFixed(2) + "<br>" +

        "Menor média: " + menorMedia.toFixed(2) + "<br>" +

        "Média geral da turma: " + mediaGeral.toFixed(2);
}