
search = function () {
    
    let todosArtistas = window.localStorage.getItem('equipamentosBD');
    console.log(todosArtistas);
    Array.from(todosArtistas).forEach(child => {
        console.log(child)
    })
    
}




