let livros = [];
const endPointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivros();

async function getBuscarLivros() {
    const res = await fetch(endPointApi);
    livros = await res.json();
    // console.table(livros);
    exibirLivros(livros);
}


const sectionLivros = document.getElementById("livros");

function exibirLivros(listaDeLivros){
    listaDeLivros.forEach(livro => {
        sectionLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="Capa do livro ${livro.titulo}" />
        <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    });
}


