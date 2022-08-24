import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: {
    nom: 'DOLA',
    prenom: 'Valentin',
    email: 'dolavalentino@gmail.com',
    image: require('../assets/images/data/jakob-owens-qoFQxxuk3QY-unsplash.jpg'),
    likes: 10,
    billets: 5,
    abonner: 19,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;