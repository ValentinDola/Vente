import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: 'Valentin',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export const selectUser = state => state.user.name;

export default userSlice.reducer;
