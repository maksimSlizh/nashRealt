import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {Navbar } from './components/Navbar'
import { AppRouter } from './components/AppRouter'
import { store } from './redux/store'

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}
