import {createSlice} from '@reduxjs/toolkit';
import {Event, Categories, News} from '../Constants/dummy-data';

const initialState = {
  user: {
    name: 'Valentin',
  },
  loading: false,
  data: Event,
  categories: Categories,
  news: News,
  like: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducer: {
    setUser: (state, action) => (state.user = action.payload),

    setLoading: (state, action) => (state.loading = action.payload),

    setData: (state, action) => (state.data = action.payload),

    setCategories: (state, action) => (state.categories = action.payload),

    setNews: (state, action) => (state.categories = action.payload),

    setLike: (state, action) => (state.like = action.payload),
  },
});

export const {setUser, setLoading, setData, setCategories, setLike, setNews} =
  appSlice.actions;

export const selectUser = state => state.app.user;
export const selectLoading = state => state.app.loading;
export const selectData = state => state.app.data;
export const selectCategories = state => state.app.categories;
export const selectNews = state => state.app.news;
export const selectLike = state => state.app.like;

export default appSlice.reducer;
