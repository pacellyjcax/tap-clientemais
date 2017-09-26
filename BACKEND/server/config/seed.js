7/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';
import Permission from '../api/permission/permission.model';

const users = [
  {
    provider: 'local',
    role: 'administrador',
    name: 'Pacelly JCAX',
    email: 'p@p',
    password: '123',
    permissions: [
      {
        name: 'Página Inicial'
      },{
        name: 'Alterar Senha Pessoal'
      },{
        name: 'Listar Permissões'
      },{
        name: 'Cadastrar Permissão'
      },{
        name: 'Listar Usuários'
      },{
        name: 'Cadastrar Usuário'
      },{
        name: 'Editar Usuário'
      },{
        name: 'Deletar Usuário'
      }
    ]
  },{
    provider: 'local',
    role: 'usuario',
    name: 'Nesomar Ramalho',
    email: 'n@n',
    password: '123'
  }
];

const permissions = [
  {
    name: 'Página Inicial'
  },{
    name: 'Alterar Senha Pessoal'
  },{
    name: 'Listar Permissões'
  },{
    name: 'Cadastrar Permissão'
  },{
    name: 'Listar Usuários'
  },{
    name: 'Cadastrar Usuário'
  },{
    name: 'Editar Usuário'
  },{
    name: 'Deletar Usuário'
  },{
    name: 'Alterar Permissões do Usuário'
  },{
    name: 'Alterar Avatar Pessoal'
  },{
    name: 'Deletar Permissão'
  },{
    name: 'Editar Permissão'
  },{
    name:'Deletar Assunto',
  },{
    name:'Cadastrar Assunto',
  },{
    name:'Editar Assunto',
  },{
    name:'Listar Assuntos'
  },{
    name:'Deletar Disciplina',
  },{
    name:'Cadastrar Disciplina',
  },{
    name:'Editar Disciplina',
  },{
    name:'Listar Disciplinas'
  },{
    name:'Deletar Questão',
  },{
    name:'Cadastrar Questão',
  },{
    name:'Editar Questão',
  },{
    name:'Listar Questões'
  }
];

let popularUsuarios = (users) => {
  User.find({}).removeAsync()
    .then(function() {
      User.createAsync(users)
      .then(function() {
        console.log('finished populating users');
      });
    });
}
let popularPermissoes = (permissions) => {
  Permission.find({}).removeAsync()
    .then(function() {
      Permission.createAsync(permissions)
      .then(function() {
        console.log('finished populating Permissions');
      });
    });
}

popularUsuarios(users);
popularPermissoes(permissions);