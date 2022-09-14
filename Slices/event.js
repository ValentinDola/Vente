import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  value: [],
  inputValue: {},
  priceValue: '0',
  totalValue: '0',
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.value = action.payload;
    },
    setCordonnee: (state, action) => {
      state.inputValue = action.payload;
    },
    setPrice: (state, action) => {
      state.priceValue = action.payload;
    },
    setTotal: (state, action) => {
      state.totalValue = action.payload;
    },
  },
});

export const {setEvent, setCordonnee, setPrice, setTotal} = eventSlice.actions;

export const selectEvent = state => state.event.value;
export const selectCordonnee = state => state.event.inputValue;
export const selectPrice = state => state.event.priceValue;
export const selectTotal = state => state.event.totalValue;

export default eventSlice.reducer;
