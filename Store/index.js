import {configureStore} from '@reduxjs/toolkit';
import appReducer from '../Slices/app';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
