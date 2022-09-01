import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  value: [],
  inputValue: {},
  price: {},
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.value = action.payload;
    },
    setIV: (state, action) => {
      state.inputValue = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const {setEvent, setIV, setPrice} = eventSlice.actions;

export const selectEvent = state => state.event.value;
export const selectIV = state => state.event.inputValue;
export const selectPrice = state => state.event.price;

export default eventSlice.reducer;
