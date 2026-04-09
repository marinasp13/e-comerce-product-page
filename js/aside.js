
export const linksNav = document.querySelector("#navegacao_links_container");


export function abriAside(){
    linksNav.style.display = "flex";
}

export function fecharAside(){
    linksNav.style.display = "none";  
}