const imagensMiniatura = document.querySelectorAll(".produto_imagem_miniatura");
const imagemMaior = document.querySelector(".produto_imagem");
const lightboxContainer = document.querySelector("#lightbox");
const imagemDestaqueLightbox = document.querySelector("#imagem_maior_lightbox");

imagemMaior.addEventListener("click", abrirLightbox);



imagensMiniatura.forEach(function(elemento){
    elemento.addEventListener("click", function(evento){
        const imagemSelecionada = evento.target;
        const urlImagemSelecionada = imagemSelecionada.getAttribute("src");
        const numeroDaImagem = urlImagemSelecionada.substring(21,22);
        const urlModificada = `assets/image-product-${numeroDaImagem}.jpg`
        const imagemDestaque = imagemSelecionada.parentElement.previousElementSibling;

        imagemDestaque.setAttribute("src", urlModificada);
    })
})

function abrirLightbox(evento){
    lightboxContainer.style.display = "flex";
    lightboxContainer.classList.add("lightbox_active");

    const url = evento.target.getAttribute("src");
    imagemDestaqueLightbox.setAttribute("src", url);
        
}

const imagensUrlSlide = [
    "assets/image-product-1.jpg",
     "assets/image-product-2.jpg",
     "assets/image-product-3.jpg",
     "assets/image-product-4.jpg"
    ];
const quantidadeDeImagens = imagensUrlSlide.length;
let modificador = 0;

const setas = document.querySelectorAll(".produto_imagens_seta");
setas.forEach(function(elemento){
    elemento.addEventListener("click", function(evento){
        const imagemDestaque = evento.target.parentElement.previousElementSibling.previousElementSibling;
        const urlDaImagemAtual = imagemDestaque.getAttribute('src');
        const identificadorDaImagemAtual = Number(urlDaImagemAtual.substring(21,22));

        if(evento.target.src.includes("next")){
            if( modificador < quantidadeDeImagens){
                modificador = identificadorDaImagemAtual + 1;
                
            } else{ 
                modificador = 1;
            }
        }else{
            if(identificadorDaImagemAtual === 1){
                modificador = quantidadeDeImagens;
            } else{
                modificador = identificadorDaImagemAtual - 1 ;
            }
            
        }

       imagemDestaque.setAttribute("src", `assets/image-product-${modificador}.jpg`)
    })
})
