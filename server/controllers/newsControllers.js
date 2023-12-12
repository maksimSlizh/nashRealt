const { News } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class NewsController {
  async create(req, res, next) {
    try {
      const {title, text, description} = req.body
      const {img} = req.files
      const fileName = uuid.v4() + '.jpg'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      const news = await News.create({title, text, description, img: fileName})
      return res.json(news)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }

  }

  async getAll(req, res) {
    let {limit, page} = req.query
    page = page || 1
    limit = limit || 9
    let offset = page * limit - limit
    const newsAll = await News.findAndCountAll({limit, offset})
    return res.json(newsAll)
  }

  async getOne(req, res) {
    const {id} = req.params
    const news = await News.findOne({where: {id}})
    return res.json(news)

  }
}

module.exports = new NewsController()
