import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  following: false,
};

export const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {
    setFollowing: (state, action) => {
      state.following = action.payload;
    },
  },
});

export const {setFollowing} = followingSlice.actions;

export const selectFollowing = state => state.following.following;

export default followingSlice.reducer;
