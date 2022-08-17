import {createSlice} from '@reduxjs/toolkit';
import {transactions} from '../Constants/dummy-data';

const initialState = {
  value: transactions,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const {setTransaction} = transactionSlice.actions;

export const selectTransaction = state => state.transaction.value;

export default transactionSlice.reducer;
