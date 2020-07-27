const jwt = require('jsonwebtoken');
const privateKey = process.env.JWT_PRIVATE_KEY;
const expiresIn = process.env.JWT_EXPIRY || '1h';

module.exports = {
    sign: (payload) => jwt.sign(payload, privateKey, { expiresIn }),
    verify: (token) => jwt.verify(token, privateKey)
}