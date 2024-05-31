const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '12h' }
  );
};

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password, role } = req.body;

      if (!email || !password) {
        return next(ApiError.badRequest('Некорректный email или password'));
      }

      const candidate = await User.findOne({ email });

      if (candidate) {
        return next(ApiError.badRequest('Пользователь с таким email уже существует'));
      }

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });
      const token = generateJwt(user._id, user.email, user.role);

      res.cookie('token', token, {
        httpOnly: false,
        secure: false, // На production установите true
        sameSite: 'strict',
        maxAge: 12 * 60 * 60 * 1000, // 12 часов
      });

      return res.status(200).json({ message: 'Регистрация успешна', token });
    } catch (error) {
      console.log('Ошибка при регистрации:', error);
      next(ApiError.internal(error.message));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(ApiError.badRequest('Некорректный email или password'));
      }

      const user = await User.findOne({ email });

      if (!user) {
        return next(ApiError.internal('Пользователь не найден'));
      }

      const comparePassword = await bcrypt.compare(password, user.password);

      if (!comparePassword) {
        return next(ApiError.internal('Указан неверный пароль'));
      }

      const token = generateJwt(user._id, user.email, user.role);

      res.cookie('token', token, {
        httpOnly: false,
        secure: false, // На production установите true
        sameSite: 'strict',
        maxAge: 12 * 60 * 60 * 1000, // 12 часов
      });

      return res.status(200).json({ role: user.role, message: 'Вход успешен' });
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async check(req, res, next) {
    try {
      const { _id, email, role } = req.user;
      const token = generateJwt(_id, email, role);

      res.cookie('token', token, {
        httpOnly: true,
        secure: false, // На production установите true
        sameSite: 'strict',
        maxAge: 12 * 60 * 60 * 1000, // 12 часов
      });

      return res.status(200).json({ id: _id, email, role, message: 'Токен проверен и обновлен' });
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new UserController();
