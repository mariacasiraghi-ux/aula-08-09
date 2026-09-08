
// Pega a div que está no HTML
let area = document.getElementById("exercicio7");


// Cria o formulário
let formulario = document.createElement("form");


// Adiciona uma classe para o CSS
formulario.className = "formulario";


// Coloca o formulário dentro da div
area.appendChild(formulario);


// Cria o título
let titulo = document.createElement("h1");

titulo.textContent = "Cadastro";

formulario.appendChild(titulo);



// NOME


let labelNome = document.createElement("label");

labelNome.textContent = "Nome:";

formulario.appendChild(labelNome);


let nome = document.createElement("input");

nome.type = "text";

nome.placeholder = "Digite seu nome";

formulario.appendChild(nome);



// E-MAIL

let labelEmail = document.createElement("label");

labelEmail.textContent = "E-mail:";

formulario.appendChild(labelEmail);


let email = document.createElement("input");

email.type = "email";

email.placeholder = "Digite seu e-mail";

formulario.appendChild(email);


// IDADE


let labelIdade = document.createElement("label");

labelIdade.textContent = "Idade:";

formulario.appendChild(labelIdade);


let idade = document.createElement("input");

idade.type = "number";

idade.placeholder = "Digite sua idade";

formulario.appendChild(idade);



// SENHA


let labelSenha = document.createElement("label");

labelSenha.textContent = "Senha:";

formulario.appendChild(labelSenha);


let senha = document.createElement("input");

senha.type = "password";

senha.placeholder = "Digite sua senha";

formulario.appendChild(senha);


// CONFIRMAÇÃO DA SENHA


let labelConfirmacao = document.createElement("label");

labelConfirmacao.textContent = "Confirme sua senha:";

formulario.appendChild(labelConfirmacao);


let confirmacao = document.createElement("input");

confirmacao.type = "password";

confirmacao.placeholder = "Digite a senha novamente";

formulario.appendChild(confirmacao);


// BOTÃO


let botao = document.createElement("button");

botao.type = "submit";

botao.textContent = "Cadastrar";

formulario.appendChild(botao);



// MENSAGEM


let mensagem = document.createElement("div");

mensagem.className = "mensagem";

formulario.appendChild(mensagem);


// VALIDAÇÃO


formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();


    // Limpa mensagens anteriores
    mensagem.textContent = "";


    // Verifica se o nome está vazio
    if (nome.value.trim() === "") {

        mensagem.textContent = "Digite seu nome.";

        return;
    }


    // Verifica se o e-mail está vazio
    if (email.value.trim() === "") {

        mensagem.textContent = "Digite seu e-mail.";

        return;
    }


    // Converte a idade para número
    let idadeNumero = Number(idade.value);


    // Verifica se a idade é maior ou igual a 18
    if (idadeNumero < 18 || idade.value === "") {

        mensagem.textContent = "A idade deve ser maior ou igual a 18.";

        return;
    }


    // Verifica se a senha possui pelo menos 6 caracteres
    if (senha.value.length < 6) {

        mensagem.textContent =
            "A senha deve possuir pelo menos 6 caracteres.";

        return;
    }


    // Verifica se as senhas são iguais
    if (senha.value !== confirmacao.value) {

        mensagem.textContent =
            "As senhas não são iguais.";

        return;
    }


    // Se chegou aqui, está tudo correto
    mensagem.textContent =
        "Cadastro realizado com sucesso!";

});

