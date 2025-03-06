const textoSomaLivros = document.getElementById("valor_total_livros_disponiveis");

function exibirValorTotal(){
    
    let livrosDisponiveis = livros.filter(livro=>livro.quantidade > 0);
    const somaValorLivros = livrosDisponiveis.reduce((acumulador,valorAtual)=>{
        return acumulador += valorAtual.preco;
    },0);
    
    textoSomaLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${somaValorLivros}</span></p>
    </div>
    `;
}    



