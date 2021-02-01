const jwt = require('jsonwebtoken');
const jwtSecret = 'shhhhh';

function createToken(data) {
  return jwt.sign(data, jwtSecret, {
    expiresIn: '6h'
  });
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwtSecret, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    })
  })
}

module.exports = {
  createToken, 
  verifyToken
}