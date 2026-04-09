export function miniaturas(elemento){
    elemento.addEventListener("click", function(evento){
        const imagemSelecionada = evento.target;
        const urlImagemSelecionada = imagemSelecionada.getAttribute("src");
        const numeroDaImagem = urlImagemSelecionada.substring(21,22);
        const urlModificada = `assets/image-product-${numeroDaImagem}.jpg`
        const imagemDestaque = imagemSelecionada.parentElement.previousElementSibling;

        imagemDestaque.setAttribute("src", urlModificada);
    })
}