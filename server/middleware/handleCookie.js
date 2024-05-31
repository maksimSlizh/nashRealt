const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.cookies.token;

    if (!token) {
      return next(ApiError.unauthorizedError('Не авторизован'));
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    return next(ApiError.unauthorizedError('Не авторизован'));
  }
};
