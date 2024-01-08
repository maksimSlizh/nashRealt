const checkPermission = (req, res, next) => {
  const { role } = req.user; // Получаем роль из токена

  // Проверяем разрешения
  if (role !== 'OWNER') {
    return res.status(403).json({ message: 'У вас нет прав для выполнения этого действия' });
  }

  // Пользователь с правами администратора, продолжаем выполнение запроса
  next();
};

module.exports = checkPermission;
