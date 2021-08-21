'use strict';

const io = require('socket.io');

module.exports = {
  get io() {
    return io;
  },
};
