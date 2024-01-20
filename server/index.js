require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use((req, res, next) => {
  // Извлекаем язык из заголовков запроса
  const language = req.headers['accept-language'] || 'ru';
  req.language = language; // Оставляем язык в оригинальном регистре

  // Вызываем следующий мидлвар
  next();
});


app.use(errorHandler)


const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync() // Функция сверяет информацию с базы данных со схемой.
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}


start()

