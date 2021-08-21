'use strict';

const mock = require('egg-mock');

describe('test/io-v3.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/socket.io-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, io')
      .expect(200);
  });
});
