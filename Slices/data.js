import {createSlice} from '@reduxjs/toolkit';
import {data} from '../Constants/dummy-data';

const initialState = {
  value: data,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const {setData} = dataSlice.actions;

export const selectData = state => state.data.value;

export default dataSlice.reducer;
