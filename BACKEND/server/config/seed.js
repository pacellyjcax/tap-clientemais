7/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';
import Permission from '../api/permission/permission.model';
import Cliente from '../api/cliente/cliente.model';

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
  }
];
const clientes = [
  {
    name: 'Coca Cola Inc.',
    email: 'cc@coca.com',
    phoneNumber: '1 888 8888 8888'
  },{
    name: 'Coca Cola Inc.',
    email: 'cc@coca.com',
    phoneNumber: '1 888 8888 8888'
  },{
    name: 'Coca Cola Inc.',
    email: 'cc@coca.com',
    phoneNumber: '1 888 8888 8888'
  },{
    name: 'Coca Cola Inc.',
    email: 'cc@coca.com',
    phoneNumber: '1 888 8888 8888'
  },{
    name: 'Coca Cola Inc.',
    email: 'cc@coca.com',
    phoneNumber: '1 888 8888 8888'
  },{
    name: 'Coca Cola Inc.',
    email: 'cc@coca.com',
    phoneNumber: '1 888 8888 8888'
  },
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

let popularClientes = (clientes) => {
  Cliente.find({}).removeAsync()
    .then(function() {
      Cliente.createAsync(clientes)
      .then(function() {
        console.log('finished populating Clientes');
      });
    });
}

popularUsuarios(users);
popularPermissoes(permissions);
popularClientes(clientes);
