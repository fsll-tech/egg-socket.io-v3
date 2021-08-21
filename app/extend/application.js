'use strict';

const io = require('../../lib/io');

let loadedIO;

module.exports = {
  get io() {
    if (loadedIO) return loadedIO;
    loadedIO = io(this);
    return loadedIO;
  },
};
