const textoSomaLivros = document.getElementById("valor");

function exibirValorTotal(){
    let livrosDisponiveis = livros.filter(livro=>livro.quantidade > 0);
    const somaValorLivros = livrosDisponiveis.reduce((acumulador,valorAtual)=>{
        return acumulador += valorAtual.preco;
    },0);
    
    textoSomaLivros.textContent = somaValorLivros.toFixed(2);
}



