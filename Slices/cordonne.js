import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  value: {},
};

export const cordonneSlice = createSlice({
  name: 'crodonne',
  initialState,
  reducers: {
    setCordonne: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setCordonne} = eventSlice.actions;

export const selectCordonne = state => state.cordonne.value;

export default cordonneSlice.reducer;
