const imagensUrlSlide = [
    "assets/image-product-1.jpg",
     "assets/image-product-2.jpg",
     "assets/image-product-3.jpg",
     "assets/image-product-4.jpg"
    ];
const quantidadeDeImagens = imagensUrlSlide.length;
let modificador = 0;


export function slide (elemento){
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
}