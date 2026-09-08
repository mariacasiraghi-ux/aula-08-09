// let nome = document.getElementById("nome");
// let idade = document.getElementById("idade");
// let nota = document.getElementById("nota");

// let botao = document.getElementById("cadastrar");

// let tabela = document.getElementById("tabela");


// botao.addEventListener("click", function() {

//     // Criando uma nova linha
//     let linha = document.createElement("tr");

//     // Criando as colunas
//     let colunaNome = document.createElement("td");
//     let colunaIdade = document.createElement("td");
//     let colunaNota = document.createElement("td");
//     let colunaSituacao = document.createElement("td");
//     let colunaAcao = document.createElement("td");

//     // Colocando os valores
//     colunaNome.textContent = nome.value;
//     colunaIdade.textContent = idade.value;
//     colunaNota.textContent = nota.value;


//     // Verificando a nota
//     if (nota.value >= 60) {
//         colunaSituacao.textContent = "Aprovado";
//     } else {
//         colunaSituacao.textContent = "Reprovado";
//     }


//     // Criando botão excluir
//     let excluir = document.createElement("button");

//     excluir.textContent = "Excluir";


//     // Quando clicar em excluir
//     excluir.addEventListener("click", function() {

//         linha.remove();

//     });


//     // Colocando o botão na coluna
//     colunaAcao.appendChild(excluir);


//     // Colocando as colunas na linha
//     linha.appendChild(colunaNome);
//     linha.appendChild(colunaIdade);
//     linha.appendChild(colunaNota);
//     linha.appendChild(colunaSituacao);
//     linha.appendChild(colunaAcao);


//     // Colocando a linha na tabela
//     tabela.appendChild(linha);


//     // Limpando os campos
//     nome.value = "";
//     idade.value = "";
//     nota.value = "";

// });