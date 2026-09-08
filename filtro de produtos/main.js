let pesquisa = document.getElementById("pesquisa");

let lista = document.getElementById("lista");

let produtos = lista.getElementsByTagName("li");


pesquisa.addEventListener("input", function() {

    let texto = pesquisa.value.toLowerCase();


    for (let i = 0; i < produtos.length; i++) {

        let produto = produtos[i].textContent.toLowerCase();


        if (produto.includes(texto)) {

            produtos[i].style.display = "list-item";

        } else {

            produtos[i].style.display = "none";

        }

    }

});