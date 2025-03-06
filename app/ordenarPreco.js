// let precos = [1,3,2,5,4,8,7,600];
// console.log(precos)


// // function compareNumbers(a, b) {
// //     return a - b;
// //   }

// // let precosOrdenados = precos.sort(compareNumbers);

// let precosOrdenados = precos.sort((a,b)=>{
//     return a-b;
// });



// console.log(precosOrdenados);


const ordenarPrecosBtn = document.getElementById("btnOrdenarPorPreco");

ordenarPrecosBtn.addEventListener("click", ()=>{
    let livrosOrdenados = livros.sort((a,b)=> a.preco - b.preco);
    exibirLivros(livrosOrdenados);
})