const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

function retornarUsuarios() {
   return usuarios;
}

//push é uma função que adiciona um novo item na lista usuarios
function adicionaNovoUsuario(nome){
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios, adicionaNovoUsuario
}