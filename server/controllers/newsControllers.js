const { News } = require('../models/models')
const ApiError = require('../error/ApiError')

class NewsController {
  async create(req, res) {
    const {title, text, img, description} = req.body
    const news = await News.create({title, text, img, description})
    return res.json(news)
  }

  async getAll(req, res) {

  }

  async getOne(req, res) {

  }
}

module.exports = new NewsController()
