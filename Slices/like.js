import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: [],
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    addLike: (state, action) => {
      state.count = [...state.count, action.payload];
    },
    removeLike: (state, action) => {
      const index = state.count.findIndex(
        item => item.id === action.payload.id,
      );
      let newCount = [...state.count];
      if (index >= 0) {
        newCount.splice(index, -1);
      } else {
        console.warn(`Can't remove this like of id ${action.payload.id} `);
      }

      state.count = newCount;
    },
  },
});

export const {addLike, removeLike} = likeSlice.actions;

export const selectCount = state => state.like.count;
// export const selectRemoveLike = state => state.like.removeLike;

export default likeSlice.reducer;
