const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'api-circle-hehe'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/api-circle-hehe-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'api-circle-hehe'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/api-circle-hehe-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'api-circle-hehe'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/api-circle-hehe-production'
  }
};

module.exports = config[env];
