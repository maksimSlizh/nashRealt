const { Insurance } = require('../models/models');
const ApiError = require('../error/ApiError');

class InsuranceController {
  async create(req, res, next) {
    try {
      const { title_ru, title_pl, text_ru, text_pl, description_ru, description_pl, userId, img, icon } = req.body;

      const insurance = await Insurance.create({
        title_ru,
        title_pl,
        text_ru,
        text_pl,
        description_ru,
        description_pl,
        img: img,
        icon: icon,
        user: userId // Предполагается, что userId уже есть в запросе
      });

      return res.json(insurance);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 8;
    const skip = (page - 1) * limit;
    try {
      const insuranceAll = await Insurance.find()
        .limit(parseInt(limit))
        .skip(skip)
        .sort({ createdAt: -1 }); // Сортировка по дате создания в обратном порядке

      return res.json(insuranceAll);
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const insurance = await Insurance.findById(req.params.id);
      if (!insurance) {
        return next(ApiError.notFound('Insurance не найден'));
      }
      return res.json(insurance);
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const insurance = await Insurance.findById(req.params.id);
      if (!insurance) {
        return next(ApiError.notFound('Insurance не найден'));
      }

      // Удаляем запись из базы данных
      await Insurance.deleteOne({ _id: insurance._id });

      return res.json({ message: 'Insurance успешно удален' });
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new InsuranceController();
