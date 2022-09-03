import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  value: '0',
};

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setPrice} = eventSlice.actions;

export const selectPrice = state => state.price.value;

export default priceSlice.reducer;
