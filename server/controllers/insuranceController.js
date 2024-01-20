const { Insurance } = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const fs = require('fs')
const path = require('path')

class InsuranceController {
  async create(req, res, next) {
    try {
      const { title_ru, title_pl, text_ru, text_pl, description_ru, description_pl, userId } = req.body
      const { img, icon } = req.files
      const fileName = uuid.v4() + '.jpg'
      const iconFileName = uuid.v4() + '_icon.png'
      img.mv(path.resolve(__dirname, '..', 'static', fileName))
      icon.mv(path.resolve(__dirname, '..', 'static', iconFileName))
      const insurance = await Insurance.create(
        { title_ru,
          title_pl,
          text_ru,
          text_pl,
          description_ru,
          description_pl,
          img: fileName,
          icon: iconFileName,
          userId}
        )
      return res.json(insurance)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 8;
    const offset = (page - 1) * limit;

    try {
        const insuranceAll = await Insurance.findAndCountAll({
            limit,
            offset,
            order: [['createdAt', 'DESC']] // Сортировка по дате создания в обратном порядке
        });

        return res.json(insuranceAll);
    } catch (error) {
        // Обработка ошибок
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

  async getOne(req, res) {
    const { id } = req.params
    const insurance = await Insurance.findOne({ where: { id } })
    return res.json(insurance)
  }

  async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      const insurance = await Insurance.findOne({ where: { id } });

      if (!insurance) {
        return next(ApiError.badRequest('Insurance не найден'));
      }

      // Удаляем изображение из директории static
      const filePath = path.resolve(__dirname, '..', 'static', insurance.img);
      const iconFilePath = path.resolve(__dirname, '..', 'static', insurance.icon);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      if (fs.existsSync(iconFilePath)) {
        fs.unlinkSync(iconFilePath);
      }

      // Удаляем запись из базы данных
      await insurance.destroy();

      return res.json({ message: 'Insurance успешно удален' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new InsuranceController()
