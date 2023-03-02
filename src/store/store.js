import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'

const rootReducer = combineReducers({
  auth: authSlice,
})

const store = configureStore({
  reducer: rootReducer,
  // middleware: [...middlewares]
})

export default store