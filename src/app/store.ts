import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ReducerType = ReturnType<typeof rootReducer>;
