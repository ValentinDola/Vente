import {createSlice} from '@reduxjs/toolkit';
import {Categories} from '../Constants/dummy-data';

const initialState = {
  categories: Categories,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {setCategories} = categoriesSlice.actions;

export const selectCategories = state => state.categories.categories;

export default categoriesSlice.reducer;
