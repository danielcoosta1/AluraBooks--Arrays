const livrosDisponiveisBtn = document.getElementById("btnLivrosDisponiveis");


livrosDisponiveisBtn.addEventListener("click",()=>{
    let livrosDisponiveis = livros.filter(livro=>livro.quantidade > 0);
    exibirLivros(livrosDisponiveis);
})