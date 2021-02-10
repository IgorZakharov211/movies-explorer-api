require('dotenv').config();

const { JWT_SECRET = 'JWT-SECRET', MONGO_URL = 'mongodb://localhost:27017/mydb' } = process.env;

module.exports = {
  JWT_SECRET,
  MONGO_URL,
};
