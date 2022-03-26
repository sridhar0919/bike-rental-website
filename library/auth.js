const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const JWTD = require('jwt-decode');
const secret = 'aoejkfcb038u3e912i3ui3415646bdsjhdqw';

const hashing = async (value) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(value, salt);
    return hash;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const hashCompare = async (passwd, hashValue) => {
  try {
    return await bcrypt.compare(passwd, hashValue);
  } catch (e) {
    console.log(e);
    return e;
  }
};

const createJWT = async ({ fullName, email }) => {
  return await JWT.sign({ fullName, email }, secret, { expiresIn: '3m' });
};

const authenticate = async (token) => {
  const decode = JWTD(token);
  console.log(decode);
  if (Math.round(new Date() / 1000) <= decode.exp) return decode.email;
  else return false;
};

module.exports = { hashing, hashCompare, createJWT, authenticate };
