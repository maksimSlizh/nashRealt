import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import { requestNews, requestOneNews } from '../http/newsApi'

export const fetchNews = createAsyncThunk('news/fetchNews', async ({page = 1, limit = 8}) => {
  const data = await requestNews(page, limit)
  return data
})

export const fetchOneNews = createAsyncThunk('news/fetchOneNews', async (id) => {
  const data = await requestOneNews(id)
  return data
})

const initialState = {
  news: [],
  oneNews: {},
  page: 1,
  totalCount: 0,
  limit: 8,
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
        state.totalCount = action.payload.count
        state.limit = action.meta.arg.limit || initialState.limit;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(fetchOneNews.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchOneNews.fulfilled, (state, action) => {
        state.loading = false
        state.oneNews = action.payload
      })
      .addCase(fetchOneNews.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default newsSlice.reducer

const selectNews = (state) => state.news.news

export const selectNewsList = createSelector(selectNews, (news) => news)
