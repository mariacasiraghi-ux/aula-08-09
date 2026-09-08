let contador = 0;

const elementoContador = document.getElementById("contador");

const botaoAdicionar = document.getElementById("adicionar");
const botaoRemover = document.getElementById("remover");
const botaoZerar = document.getElementById("zerar");


botaoAdicionar.addEventListener("click", function () {
    contador = contador + 1;

    elementoContador.textContent = contador;
});


botaoRemover.addEventListener("click", function () {

    if (contador > 0) {
        contador = contador - 1;
    }

    elementoContador.textContent = contador;
});


botaoZerar.addEventListener("click", function () {
    contador = 0;

    elementoContador.textContent = contador;
});
