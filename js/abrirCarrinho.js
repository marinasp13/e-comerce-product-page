const carrinhoContainer = document.querySelector("#cart_modal_container");

export function abrirCarrinho(){
    carrinhoContainer.classList.toggle("cart_fechado");

    if(!carrinhoContainer.classList.contains("cart_fechado")){
        carrinhoContainer.classList.add("cart_aberto");
    }else{
        carrinhoContainer.classList.remove("cart_aberto");
    }
    
    
}