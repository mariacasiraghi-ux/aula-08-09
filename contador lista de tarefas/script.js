
const formulario = document.getElementById("formulario");
const campo = document.getElementById("tarefa");
const lista = document.getElementById("lista");


// Evento INPUT
campo.addEventListener("input", function () {

    console.log("Usuário está digitando:", campo.value);

});


// Evento SUBMIT
formulario.addEventListener("submit", function (evento) {

    // Impede o formulário de recarregar a página
    evento.preventDefault();

    const texto = campo.value.trim();

    // Não adiciona tarefa vazia
    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }


    // Cria o elemento <li>
    const item = document.createElement("li");


    // Cria o texto da tarefa
    const textoTarefa = document.createElement("span");

    textoTarefa.textContent = texto;


    // Cria botão Concluir
    const botaoConcluir = document.createElement("button");

    botaoConcluir.textContent = "Concluir";


    // Cria botão Excluir
    const botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = "Excluir";


    // Evento CLICK - Concluir
    botaoConcluir.addEventListener("click", function () {

        textoTarefa.style.textDecoration = "line-through";
        textoTarefa.style.color = "gray";

    });


    // Evento CLICK - Excluir
    botaoExcluir.addEventListener("click", function () {

        item.remove();

    });


    // Coloca os elementos dentro do <li>
    item.appendChild(textoTarefa);
    item.appendChild(botaoConcluir);
    item.appendChild(botaoExcluir);


    // Coloca o <li> dentro da <ul>
    lista.appendChild(item);


    // Limpa o campo
    campo.value = "";
   
});