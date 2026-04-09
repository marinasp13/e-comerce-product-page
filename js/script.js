import { abrirLightbox } from "./lightbox.js";
import { fecharLightbox } from "./lightbox.js";
import { miniaturas } from "./miniaturas.js";
import { slide } from "./slide.js";
import { abrirCarrinho } from "./abrirCarrinho.js";
import { quantidadeProduto} from "./quantidade-produto.js";
import { abriAside, fecharAside } from "./aside.js";
import { linksNav } from "./aside.js";

const imagemMaior = document.querySelector(".produto_imagem");
const imagensMiniatura = document.querySelectorAll(".produto_imagem_miniatura");
const setas = document.querySelectorAll(".produto_imagens_seta");
const carrinhoDeCompras = document.querySelector("#header_opcoes_item_cart_img");
const botaoQuantidadeMenos = document.querySelector("#quantidade_menos_img");
const botaoQuantidadeMais = document.querySelector("#quantidade_mais_img");
const botaoFecharLightbox = document.querySelector("#lightbox_fechar_img");
const aside = document.querySelector("#header_aside_img");
const botaoFecharAside = document.querySelector("#navegacao_links_fechar_img");


imagemMaior.addEventListener("click", abrirLightbox);

imagensMiniatura.forEach(miniaturas);

setas.forEach(slide);

carrinhoDeCompras.addEventListener("click", abrirCarrinho);

botaoQuantidadeMenos.addEventListener("click", quantidadeProduto);

botaoQuantidadeMais.addEventListener("click", quantidadeProduto);

botaoFecharLightbox.addEventListener("click", fecharLightbox);

aside.addEventListener("click", abriAside);

botaoFecharAside.addEventListener("click", fecharAside);

window.addEventListener("resize", () => {
    if(window.innerWidth >= 1200)  {
        linksNav.style.display = "block";
    } else{
        linksNav.style.display = "none";
    }
})