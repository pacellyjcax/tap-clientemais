'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var clienteCtrlStub = {
  index: 'clienteCtrl.index',
  show: 'clienteCtrl.show',
  create: 'clienteCtrl.create',
  update: 'clienteCtrl.update',
  destroy: 'clienteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var clienteIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './cliente.controller': clienteCtrlStub
});

describe('cliente API Router:', function() {

  it('should return an express router instance', function() {
    clienteIndex.should.equal(routerStub);
  });

  describe('GET /api/cliente', function() {

    it('should route to cliente.controller.index', function() {
      routerStub.get
        .withArgs('/', 'clienteCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/cliente/:id', function() {

    it('should route to cliente.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'clienteCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/cliente', function() {

    it('should route to cliente.controller.create', function() {
      routerStub.post
        .withArgs('/', 'clienteCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/cliente/:id', function() {

    it('should route to cliente.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'clienteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/cliente/:id', function() {

    it('should route to cliente.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'clienteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/cliente/:id', function() {

    it('should route to cliente.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'clienteCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
