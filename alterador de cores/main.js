const quadrado = document.getElementById("quadrado");

const vermelho = document.getElementById("vermelho");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const amarelo = document.getElementById("amarelo");

const corAtual = document.getElementById("corAtual");


// BOTÃO VERMELHO
vermelho.addEventListener("click", function () {
    quadrado.style.backgroundColor = "red";
    corAtual.textContent = "Cor atual: Vermelho";
});


// BOTÃO VERDE
verde.addEventListener("click", function () {
    quadrado.style.backgroundColor = "green";
    corAtual.textContent = "Cor atual: Verde";
});


// BOTÃO AZUL
azul.addEventListener("click", function () {
    quadrado.style.backgroundColor = "blue";
    corAtual.textContent = "Cor atual: Azul";
});


// BOTÃO AMARELO
amarelo.addEventListener("click", function () {
    quadrado.style.backgroundColor = "yellow";
    corAtual.textContent = "Cor atual: Amarelo";
});