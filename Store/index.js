import {configureStore} from '@reduxjs/toolkit';
import categoriesReducer from '../Slices/categories';
import dataReducer from '../Slices/data';
import likeReducer from '../Slices/like';
import loadingReducer from '../Slices/loading';
import newsReducer from '../Slices/news';
import userReducer from '../Slices/user';
import followingReducer from '../Slices/follow';
import ticketReducer from '../Slices/tickets';
import transitionReducer from '../Slices/transactions';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    data: dataReducer,
    like: likeReducer,
    loading: loadingReducer,
    news: newsReducer,
    user: userReducer,
    following: followingReducer,
    ticket: ticketReducer,
    transition: transitionReducer,
  },
});
