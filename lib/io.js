'use strict';

const { Server } = require('socket.io');

module.exports = app => {
  return new Server();
};
