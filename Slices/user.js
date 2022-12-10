import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: false,
  user: {
    email: 'dolavalentino@gmail.com',
    displayName: 'Username',
    photoURL: '',
    uid: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    setDisplayName: (state, action) => {
      state.user.displayName = action.payload;
    },
    setPhotoURL: (state, action) => {
      state.user.photoURL = action.payload;
    },
    setUID: (state, action) => {
      state.user.uid = action.payload;
    },
  },
});

export const {setPhotoURL, setValue, setEmail, setDisplayName, setUID} =
  userSlice.actions;

export const selectUser = state => state.user.user;
export const selectValue = state => state.user.value;

export default userSlice.reducer;
