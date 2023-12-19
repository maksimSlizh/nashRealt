import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  news: [
    {
      id: 1,
      title: 'Заголовок новости',
      text: 'Текст новости',
      description: 'Описание новости',
      img: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 2,
      title: 'Заголовок новости 2',
      text: 'Текст новости 2',
      description: 'Описание новости 2',
      img: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 3,
      title: 'Заголовок новости 3',
      text: 'Текст новости 3',
      description: 'Описание новости 3',
      img: 'https://picsum.photos/id/237/200/300',
    }
  ],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews(state, action) {
      state.news = action.payload
    },
  },
})

export const { setNews } = newsSlice.actions
export default newsSlice.reducer

const selectNews = state => state.news.news

export const selectNewsList = createSelector(
  selectNews,
  news => news
);
