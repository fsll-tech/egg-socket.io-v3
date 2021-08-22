# egg-socket.io-v3

本项目是 `eggjs` 的 `v3.x` 版本的 `socket.io` 插件

## 安装

```bash
$ npm install git+ssh://git@github.com:fsll-tech/egg-socket.io-v3.git --save
```

## 使用

```js
// {app_root}/config/plugin.js
exports.io = {
  enable: true,
  package: 'egg-socket.io-v3',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.io = {
  path: '/socket.io',
  serveClient: true,
  connectTimeout: 45000,
};
```

这里的配置是 [Server API](https://socket.io/docs/v3/server-api/#new-Server-httpServer-options) 的 options 参数

```js
// {app_root}/app/io/main.js
'use strict';

module.exports = io => {
  io.on('connection', socket => {
    //...
  });
};
```

添加一个 socket.io 的入口文件，这里可以执行初始化等操作

```js
// {app_root}/app.js
'use strict';

// 定义 io 入口文件
const ioMain = require('./app/io/main');

module.exports = app => {
  const { io } = app;
  ioMain(io);
};
```

在 `app.js` 加入这个入口文件

## 例子

[egg-socket.io-v3-demo](https://github.com/fsll-tech/egg-socket.io-v3-demo) 是一个使用本插件的完整项目
