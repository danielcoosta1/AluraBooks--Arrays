function aplicarDesconto(livros){
    const livrosComDesconto = livros.map(livro =>{
        livro.preco *= (0.9);
        return livro;
    })
    return livrosComDesconto;
}