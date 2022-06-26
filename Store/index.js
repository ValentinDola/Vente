import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Slices/user';
import loadingReducer from '../Slices/loading';

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
  },
});
