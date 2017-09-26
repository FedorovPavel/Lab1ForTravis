var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'lab1'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:1111@ds149954.mlab.com:49954/car'
  },

  test: {
    root: rootPath,
    app: {
      name: 'lab1'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:1111@ds149954.mlab.com:49954/car'
  },

  production: {
    root: rootPath,
    app: {
      name: 'lab1'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:1111@ds149954.mlab.com:49954/car'
  }
};

module.exports = config[env];
