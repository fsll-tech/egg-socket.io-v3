'use strict';

const { Server } = require('socket.io');

module.exports = app => {
  const { logger, config } = app;
  const io = new Server();
  logger.info('[io] 正在启动');

  app.once('server', server => {
    io.attach(server, config.io);
    logger.info('[io] 启动完成');
  });

  return io;
};
