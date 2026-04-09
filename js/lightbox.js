const lightboxContainer = document.querySelector("#lightbox");
const imagemDestaqueLightbox = document.querySelector("#imagem_maior_lightbox");

export function abrirLightbox(evento){
    lightboxContainer.style.display = "flex";
    lightboxContainer.classList.add("lightbox_active");

    const url = evento.target.getAttribute("src");
    imagemDestaqueLightbox.setAttribute("src", url);
        
}

export function fecharLightbox(){
    lightboxContainer.style.display = "none";
    lightboxContainer.classList.remove("lightbox_active");
}