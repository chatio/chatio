'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1511070374259_5196';

  // add your config here
  config.middleware = [];

  config.io = {
    init: { }, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [ 'filter' ],
      },
      '/chat': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [],
      },
    },
    // redis: {
    //   host: '127.0.0.1',
    //   port: 6379
    // }
  };

  config.view = {
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  return config;
};
