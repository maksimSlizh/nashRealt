const { Realty, RealtyImage } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

class RealtyController {
  async create(req, res, next) {
    try {

      const { title, description, price, area, rooms, floor } = req.body;
      const images = Array.isArray(req.files.images) ? req.files.images : [req.files.images] // предполагается, что изображения приходят в поле "images"

      const realty = await Realty.create({ title, description, price, area, rooms, floor });
      console.log(realty)
      let realtyImages = [];
      if (images.length > 0) {
        realtyImages = await Promise.all(images.map(async (image) => {
          const fileName = uuid.v4() + '.jpg';
          image.mv(path.resolve(__dirname, '..', 'static', fileName));
          const createdImage = await RealtyImage.create({ imageUrl: fileName });
          // Установка связи между изображением и недвижимостью
          await createdImage.setRealty(realty);
          return createdImage;
        }));
      }

      return res.json(realty);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 4;
    const offset = (page - 1) * limit;
    try {
      const totalCount = await Realty.count()
      const realties = await Realty.findAll({
        limit,
        offset,
        include: [RealtyImage]
      });
      return res.json({totalCount, realties});
    } catch (e) {
      next(ApiError.internalServerError(e.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const realty = await Realty.findByPk(id, { include: [RealtyImage] });

      if (!realty) {
        return next(ApiError.notFound('Недвижимость не найдена'));
      }

      return res.json(realty);
    } catch (e) {
      next(ApiError.internalServerError(e.message));
    }
  }

  async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      const realty = await Realty.findByPk(id);

      if (!realty) {
        return next(ApiError.notFound('Недвижимость не найдена'));
      }

      const realtyImages = await RealtyImage.findAll({ where: { realtyId: id } });
      realtyImages.forEach(async (image) => {
        const filePath = path.resolve(__dirname, '..', 'static', image.imageUrl);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        await image.destroy();
      });

      await realty.destroy();

      return res.json({ message: 'Недвижимость успешно удалена' });
    } catch (e) {
      next(ApiError.internalServerError(e.message));
    }
  }
}

module.exports = new RealtyController();
