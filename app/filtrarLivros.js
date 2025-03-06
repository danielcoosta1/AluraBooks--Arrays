
const allBtnLivros = document.querySelectorAll(".btn");
allBtnLivros.forEach(btn => btn.addEventListener("click",(evento)=>{
    textoSomaLivros.innerHTML = "";
    const elementoBtn = document.getElementById(evento.target.id); //elemento que disparou o evento
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro=> livro.categoria == categoria);
    exibirLivros(livrosFiltrados);
    if(categoria == "disponivel"){
        exibirValorTotal();
    }
}));

// function filtrarLivros(){
//     const elementoBtn = document.getElementById(this.id); //elemento que disparou o evento
//     const categoria = elementoBtn.value
//     let livrosFiltrados = livros.filter(livro=> livro.categoria == categoria);
//     exibirLivros(livrosFiltrados);
// }

