import {createSlice} from '@reduxjs/toolkit';
import {tickets} from '../Constants/dummy-data';

const initialState = {
  tickets: tickets,
};

export const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.tickets = [...state.tickets, action.payload];
    },
  },
});

export const {setTicket} = ticketSlice.actions;

export const selectTicket = state => state.ticket.tickets;

export default ticketSlice.reducer;
