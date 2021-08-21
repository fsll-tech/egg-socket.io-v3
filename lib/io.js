'use strict';

const { Server } = require('socket.io');

let io = {};

module.exports = app => {
  const { logger, config } = app;
  logger.info('正在启动');

  app.once('server', server => {
    io = new Server(server, config.io);
    logger.info('启动完成');
  });

  return io;
};
