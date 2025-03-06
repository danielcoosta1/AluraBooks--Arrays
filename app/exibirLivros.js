const sectionLivros = document.getElementById("livros");

function exibirLivros(listaDeLivros) {
    sectionLivros.innerHTML = "";
    listaDeLivros.forEach(livro => {
            
            if(livro.quantidade >0){

           
            sectionLivros.innerHTML += 
            `
            <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" 
            alt="Capa do livro ${livro.titulo}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
            `
        } else {
            sectionLivros.innerHTML += 
            `
            <div class="livro">
            <img class="livro__imagens indisponivel" src="${livro.imagem}" 
            alt="Capa do livro ${livro.titulo}" />
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
            `
        }
    });
    
}

