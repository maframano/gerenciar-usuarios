/*const usuarios = ['Matheus', 'Marcos', 'Lucas', 'João'];

//function retornarUsuarios() {
//   return usuarios;
//}

//push é uma função que adiciona um novo item na lista usuarios
//function adicionaNovoUsuario(nome){
   // usuarios.push(nome);
//}

//module.exports = {
  //  retornarUsuarios, adicionaNovoUsuario
//}*/

const usuarios = [
    {nome : 'Matheus',
     email :'matheus@hotmail.com'  
    }, 
    
    {nome :'Marcos', 
      email :'marcos@hotmail.com'   
    },

    {nome :'Lucas',
      email :'lucas@hotmail.com'   
    }, 
    
    {nome :'João',
     email :'joao@hotmail.com' 
    }
];

function retornarUsuarios() {
   return usuarios;
}

//push é uma função que adiciona um novo item na lista usuarios
function adicionaNovoUsuario(usuario){
    usuarios.push(usuario);
}

module.exports = {
    retornarUsuarios, adicionaNovoUsuario
}
/*
  não precisou declarar na função pois você tá 
  indicando que essa função precisa de receber um dado, 
  então ele meio que cria automaticamente nesse caso
  você só cria a caixa (const) quando está dentro de um escopo, 
  se for nos parâmetros, não é necessário pois ele cria 
  automaticamente durante a execução
*/ 