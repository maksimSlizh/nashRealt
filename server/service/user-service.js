const { User } = require('../models/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const ApiError = require('../error/ApiError')
const mailService = require('../service/mail-service')
const tokenService = require('../service/token-service')
const UserDto = require('../dtos/user-dtos')

class UserService {
  async registration(email, password, role = 'USER') {
    const candidate = await User.findOne({ where: { email } })
    if (candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }
    const hashPassword = await bcrypt.hash(password, 5)
    // const activationLink = uuid.v4()
    const user = await User.create({ email, role, password: hashPassword })

    const userDto = new UserDto(user) // id, email, role, isActivated
    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async login(email, password) {
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Указан неверный пароль'))
    }

    const userDto = new UserDto(user) // id, email, role, isActivated
    const tokens = tokenService.generateTokens({ ...userDto })


    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken)
    return token
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      return next(ApiError.unauthorizedError())
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    console.log(userData, "userData AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    const tokenFromDb = await tokenService.findToken(refreshToken)

    if (!userData || !tokenFromDb) {
      return next(ApiError.unauthorizedError())
    }

    const user = await User.findOne({where: {id: userData.id}})
    const userDto = new UserDto(user) // id, email, role, isActivated

    const tokens = tokenService.generateTokens({ ...userDto })

    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

}

module.exports = new UserService()
