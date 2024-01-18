import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import newsReducer from './newsSlice'
import realtyReducer from './realtySlice'
import insuranceReducer from './insuranceSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
    realty: realtyReducer,
    insurance: insuranceReducer
  },
})

