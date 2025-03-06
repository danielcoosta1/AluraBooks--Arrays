
const allBtnLivros = document.querySelectorAll(".btn");
allBtnLivros.forEach(btn => btn.addEventListener("click",filtrarLivros));

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id); //elemento que disparou o evento
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro=> livro.categoria == categoria);
    exibirLivros(livrosFiltrados);
}