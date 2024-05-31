require('dotenv').config(); // Загрузка переменных окружения из файла .env
const express = require('express');
const cookieParser = require('cookie-parser');
const models = require('./models/models');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || config.get('serverPort');

const app = express();
app.use(cors({
  origin: 'http://localhost:8080', // URL вашего приложения
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(config.get('MONGO_URI'));
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

start();
