const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  // isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
  // activationLink: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

// const Token = sequelize.define('token', {
//   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//   refreshToken: {type: DataTypes.STRING, unique: true},
// })

const News = sequelize.define('news', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title_ru: { type: DataTypes.STRING, allowNull: false },
  title_pl: { type: DataTypes.STRING, allowNull: false },
  text_ru: { type: DataTypes.STRING(5000), allowNull: false },
  text_pl: { type: DataTypes.STRING(5000), allowNull: false },
  description_ru: { type: DataTypes.STRING, allowNull: false },
  description_pl: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
})

const Realty = sequelize.define('realty', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title_ru: {type: DataTypes.STRING, unique: true, allowNull: false},
  title_pl: {type: DataTypes.STRING, unique: true, allowNull: false},
  description_ru: {type: DataTypes.STRING(2500), allowNull: false},
  description_pl: {type: DataTypes.STRING(2500), allowNull: false},
  address: {type: DataTypes.STRING, allowNull: false},
  deposit: {type: DataTypes.STRING},
  price: {type: DataTypes.STRING, allowNull: false},
  area: {type: DataTypes.STRING, allowNull: false},
  rooms: {type: DataTypes.STRING, allowNull: false},
  floor: {type: DataTypes.STRING, allowNull: false},
});

// Модель для хранения информации о фотографиях недвижимости
const RealtyImage = sequelize.define('realty_image', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  imageUrl: {type: DataTypes.STRING, allowNull: false}, // Путь к изображению
})

const Insurance = sequelize.define('insurance', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title_ru: {type: DataTypes.STRING, unique: true, allowNull: false},
  title_pl: {type: DataTypes.STRING, unique: true, allowNull: false},
  text_ru: {type: DataTypes.STRING(2500), allowNull: false},
  text_pl: {type: DataTypes.STRING(2500), allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
  icon: {type: DataTypes.STRING},
  description_ru: {type: DataTypes.STRING, allowNull: false},
  description_pl: {type: DataTypes.STRING, allowNull: false},
  userId: { type: DataTypes.INTEGER, allowNull: false }
})


Realty.hasMany(RealtyImage);
RealtyImage.belongsTo(Realty);
User.hasMany(Realty)
Realty.belongsTo(User)
News.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(News, { foreignKey: 'userId' });
Insurance.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Insurance, { foreignKey: 'userId' });
// Token.belongsTo(User);
// User.hasMany(Token);

module.exports = {
  User,
  News,
  Realty,
  RealtyImage,
  Insurance
}
