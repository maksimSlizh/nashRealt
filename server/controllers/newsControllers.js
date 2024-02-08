const { News } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const fs = require('fs')
const path = require('path')

class NewsController {
  async create(req, res, next) {
    try {
      const { title_ru, title_pl, text_ru, text_pl, description_ru, description_pl, userId } = req.body;
      const { img } = req.files;
      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const news = await News.create({
        title_ru,
        title_pl,
        text_ru,
        text_pl,
        description_ru,
        description_pl,
        img: fileName,
        userId,
      });

      return res.json(news);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    try {
        const { limit, page } = req.query;
        const limitInt = parseInt(limit, 10); // Преобразование в число
        const pageInt = parseInt(page, 10); // Преобразование в число
        const offset = (pageInt - 1) * limitInt;

        const newsAll = await News.findAndCountAll({
            limit: limitInt,
            offset,
            order: [['createdAt', 'DESC']],
        });

        return res.json(newsAll);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

  async getOne(req, res) {
    const { id } = req.params;

    try {
      const news = await News.findOne({ where: { id } });

      if (!news) {
        return res.status(404).json({ error: 'News not found' });
      }

      return res.json(news)
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      const news = await News.findOne({ where: { id } });

      if (!news) {
        return next(ApiError.badRequest('Пост не найден'));
      }

      // Удаляем изображение из директории static
      const filePath = path.resolve(__dirname, '..', 'static', news.img);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      // Удаляем запись из базы данных
      await news.destroy();

      return res.json({ message: 'Пост успешно удален' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new NewsController()
