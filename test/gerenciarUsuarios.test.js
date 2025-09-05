const { retornarUsuarios, adicionaNovoUsuario } = require('../src/gerenciarUsuarios');
const {expect } = require('chai');

describe('Testar as funções de Gestão de usuarios', function (){
    it('Validar que posso adicionar um novo nome de usuario na lista', function(){
        //1. adicionar um novo nome na lista de usuarios
            adicionaNovoUsuario('Maria');
        //2. Retornar a lista de usuarios na caixa lista de usuarios
            const listaDeUsuarios = retornarUsuarios();
        //3. Comparar se o novo nome está no final da lista de usuarios
            expect(listaDeUsuarios.at(-1)).to.equal('Maria');

    });

});

//definir o passo a passo de tudo que preciso fazer