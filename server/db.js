const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
  process.env.DB_NAME, // название базы данных
  process.env.DB_USER, // имя пользователя
  process.env.DB_PASSWORD, // пароль
  {
    dialect: 'mysql', // указываем, что используем MySQL
    host: process.env.DB_HOST, // хост базы данных
    port: process.env.DB_PORT // порт
  }
);
