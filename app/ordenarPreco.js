
const ordenarPrecosBtn = document.getElementById("btnOrdenarPorPreco");

ordenarPrecosBtn.addEventListener("click", ()=>{
    let livrosOrdenados = livros.sort((a,b)=> a.preco - b.preco);
    exibirLivros(livrosOrdenados);
})