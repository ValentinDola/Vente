import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducer: {
    setLoading: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const {setLoading} = loadingSlice.actions;

export const selectLoading = state => state.loading.origin;

export default loadingSlice.reducer;
