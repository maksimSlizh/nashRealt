const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  role: { type: String, default: 'USER' }
});

const newsSchema = new mongoose.Schema({
  title_ru: { type: String, required: true },
  title_pl: { type: String, required: true },
  text_ru: { type: String, required: true },
  text_pl: { type: String, required: true },
  description_ru: { type: String, required: true },
  description_pl: { type: String, required: true },
  img: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Ссылка на пользователя
});

const realtySchema = new mongoose.Schema({
  title_ru: { type: String, unique: true, required: true },
  title_pl: { type: String, unique: true, required: true },
  description_ru: { type: String, required: true },
  description_pl: { type: String, required: true },
  address: { type: String, required: true },
  deposit: { type: String },
  price: { type: String, required: true },
  area: { type: String, required: true },
  rooms: { type: String, required: true },
  floor: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Ссылка на пользователя
  images: [{ type: String }] // Ссылки на изображения недвижимости в виде строк (URL-адресов)
});

const insuranceSchema = new mongoose.Schema({
  title_ru: { type: String, unique: true, required: true },
  title_pl: { type: String, unique: true, required: true },
  text_ru: { type: String, required: true },
  text_pl: { type: String, required: true },
  img: { type: String, required: true },
  icon: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Ссылка на пользователя
});

const User = mongoose.model('User', userSchema);
const News = mongoose.model('News', newsSchema);
const Realty = mongoose.model('Realty', realtySchema);
const Insurance = mongoose.model('Insurance', insuranceSchema);

module.exports = {
  User,
  News,
  Realty,
  Insurance
};
