const { News } = require('../models/models');
const ApiError = require('../error/ApiError');

class NewsController {
  async create(req, res, next) {
    try {
      const { title_ru, title_pl, text_ru, text_pl, description_ru, description_pl, userId, img } = req.body;


      const news = await News.create({
        title_ru,
        title_pl,
        text_ru,
        text_pl,
        description_ru,
        description_pl,
        img: img,
        userId,
      });

      return res.json(news);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const { limit = 8, page = 1 } = req.query;
      const skip = (page - 1) * limit;

      const newsAll = await News.find()
        .limit(parseInt(limit))
        .skip(skip)
        .sort({ createdAt: -1 });

      return res.json(newsAll);
    } catch (error) {
      next(ApiError.internalServerError(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const news = await News.findById(req.params.id);

      if (!news) {
        return next(ApiError.notFound('News not found'));
      }

      return res.json(news);
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const news = await News.findById(req.params.id);

      if (!news) {
        return next(ApiError.notFound('News not found'));
      }

      // Удаляем запись из базы данных
      await News.deleteOne({ _id: news._id });

      return res.json({ message: 'Пост успешно удален' });
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new NewsController();
