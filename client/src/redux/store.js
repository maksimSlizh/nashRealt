import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import newsReducer from './newsSlice'
import realtyReducer from './realtySlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
    realty: realtyReducer
  },
})

