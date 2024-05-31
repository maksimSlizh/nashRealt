const { Realty} = require('../models/models');
const ApiError = require('../error/ApiError');

class RealtyController {
  async create(req, res, next) {
    try {
      const {
        title_ru,
        title_pl,
        description_ru,
        description_pl,
        price,
        area,
        rooms,
        floor,
        address,
        deposit,
        images
      } = req.body;

      console.log(title_ru, title_pl, description_ru, description_pl, price, area, rooms, floor, address, deposit, images);

      const realty = await Realty.create({
        title_ru,
        title_pl,
        description_ru,
        description_pl,
        price,
        area,
        rooms,
        floor,
        address,
        deposit,
        images
      });

      return res.json(realty);
    } catch (error) {
      console.log(error);
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 10;
    const skip = (page - 1) * limit;

    try {
      const totalCount = await Realty.countDocuments();
      const realties = await Realty.find()
        .limit(parseInt(limit, 10))
        .skip(skip);


      return res.json({ totalCount, realties }); // Возвращаем общее количество объектов и массив объектов с их изображениями
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const realty = await Realty.findById(id);

      if (!realty) {
        return next(ApiError.notFound('Недвижимость не найдена'));
      }

      return res.json({ realty});
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      const realty = await Realty.findById(id);

      if (!realty) {
        return next(ApiError.notFound('Недвижимость не найдена'));
      }

      await Realty.deleteOne({ _id: id });

      return res.json({ message: 'Недвижимость успешно удалена' });
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new RealtyController();
