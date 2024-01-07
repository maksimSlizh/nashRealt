const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

const generateJwt = (id, email, role) => {
  return jwt.sign(
    { id, email, role },
    process.env.SECRET_KEY,
    { expiresIn: '12h' }
  )
}

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body
    console.log(req.body)
    if (!email || !password) {
      return next(ApiError.badRequest('Некорректный email или password'))
    }
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({ email, role, password: hashPassword })
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({ token})

  }

  async login(req, res, next) {
    const {email, password} = req.body
    console.log(req.body)
    if (!email || !password) {
      console.log(req.body)
      return next(ApiError.badRequest(`Некоректный email или password `))
    }
    if(!email.trim() || !password.trim()) {
      return next(ApiError.badRequest('Некорректный email или password 2'))
    }
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({token, role: user.role})
  }

  async check(req, res, next) {
    const { id, email, role } = req.user
    const token = generateJwt(id, email, role)
    return res.json({ id, email, role, token })
  }
}

module.exports = new UserController()
