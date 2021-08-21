'use strict';

const { Server } = require('socket.io');
const appRootRequire = require('app-root-path').require;

let io = {};

module.exports = app => {
  const { logger, config } = app;
  logger.info('正在启动');

  app.once('server', server => {
    io = new Server(server, config.io);
    logger.info('启动完成');
    const main = appRootRequire('/app/io');
    if (main) main(io);
  });

  return io;
};
