import { registraIncidencia, personalizaAnuncio } from "./algort.js";

const p = document.querySelector("p");
const botao = document.querySelectorAll ("button");
let a = 0, b = 1, c = 2;

botao[0].addEventListener("click", function () {
    registraIncidencia (b,a);
});

botao[1].addEventListener("click", function () {
    registraIncidencia (b,c);
});

p.innerHTML = "Você deveria ir para a página " + personalizaAnuncio(b);
