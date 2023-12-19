import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authRoutes, publicRoutes } from '../router/router';
import { PREW_ROUTE } from '../utils/consts';

export function AppRouter() {
  // const isAuth = false;
  const { isAuth, user } = useSelector(state => state.user)
  console.log(isAuth, user)
  return (
    <Routes>
      {/* Маршруты для авторизованных пользователей */}
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

      {/* Маршруты для неавторизованных пользователей */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={PREW_ROUTE} />} />
    </Routes>
  );
}
