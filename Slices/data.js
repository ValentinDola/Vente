import {createSlice} from '@reduxjs/toolkit';
import {data} from '../Constants/dummy-data';

const initialState = {
  events: data,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const {setData} = dataSlice.actions;

export const selectData = state => state.data.events;

export default dataSlice.reducer;
