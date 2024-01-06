import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import { requestNews } from '../http/newsApi'

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const data = await requestNews()
  return data
})

const initialState = {
  news: {},
  loading: false,
  error: null,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false
        state.news = action.payload.rows
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default newsSlice.reducer

const selectNews = (state) => state.news.news

export const selectNewsList = createSelector(selectNews, (news) => news)
