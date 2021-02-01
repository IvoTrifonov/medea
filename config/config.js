const env = process.env.NODE_ENV || 'development';
require('dotenv').config();

const config = {
  development: {
    port: 3000,
    dbURL: 'mongodb://localhost:27017/medea',
    cookie: 'x-auth-token'
  },
  production: {
    port: process.env.PORT || 3000,
    dbURL: process.env.MONGODB_URI,
    cookie: 'x-auth-token'
  }
}

module.exports = config[env];
