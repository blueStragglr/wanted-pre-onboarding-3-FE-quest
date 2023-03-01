import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';

export default configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

const rootReducer = combineReducers({
  auth: authSlice,
});
