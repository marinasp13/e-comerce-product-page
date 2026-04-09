const quantidadeElemento = document.querySelector("#quantidade");

export function quantidadeProduto(evento){
    const botao = evento.target;
    const quantidadeAtual = Number(quantidadeElemento.innerText);

    if(botao.src.includes("plus")){
        //codigo botao de mais
        
        
        const valorAcrescido = quantidadeAtual + 1;
        quantidadeElemento.innerText = valorAcrescido;

        
    }else{
         //codigo botao de menos
         if(quantidadeAtual>0){
            const valorDecrescido = quantidadeAtual - 1;
            quantidadeElemento.innerText = valorDecrescido;
         }
         return;
         
         
    }
}