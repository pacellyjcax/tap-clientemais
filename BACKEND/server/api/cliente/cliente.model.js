'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var ClienteSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Cliente', ClienteSchema);
