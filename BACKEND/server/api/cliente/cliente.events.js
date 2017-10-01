/**
 * Permission model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Permission = require('./permission.model');
var PermissionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PermissionEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Permission.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PermissionEvents.emit(event + ':' + doc._id, doc);
    
    PermissionEvents.emit(event, doc);
  }
}

module.exports = PermissionEvents;
