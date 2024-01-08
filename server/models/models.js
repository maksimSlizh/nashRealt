const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const News = sequelize.define('news', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, unique: true, allowNull: false},
  text: {type: DataTypes.STRING, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
})

const Realty = sequelize.define('realty', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
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
console.log(RealtyImage)


Realty.hasMany(RealtyImage);
RealtyImage.belongsTo(Realty);
User.hasMany(Realty)
Realty.belongsTo(User)
User.hasMany(News)
News.belongsTo(User)

module.exports = {
  User,
  News,
  Realty,
  RealtyImage
}
