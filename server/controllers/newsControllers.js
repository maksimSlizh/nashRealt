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
    const newsAll = await News.findAll()
    return res.json(newsAll)
  }

  async getOne(req, res) {

  }
}

module.exports = new NewsController()
