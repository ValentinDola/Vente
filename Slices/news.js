import {createSlice} from '@reduxjs/toolkit';
import {News} from '../Constants/dummy-data';

const initialState = {
  news: News,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {setNews} = newsSlice.actions;

export const selectNews = state => state.news.news;

export default newsSlice.reducer;
