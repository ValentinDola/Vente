import {createSlice} from '@reduxjs/toolkit';
import {tickets} from '../Constants/dummy-data';

const initialState = {
  value: tickets,
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const {setTicket} = ticketSlice.actions;

export const selectTicket = state => state.ticket.value;

export default ticketSlice.reducer;
