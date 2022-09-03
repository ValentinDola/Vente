import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setEvent} = eventSlice.actions;

export const selectEvent = state => state.event.value;

export default eventSlice.reducer;
