import {configureStore} from '@reduxjs/toolkit'
import loggedReducer from './loggedReducer'

export const store = configureStore({
  reducer: {
    auth: loggedReducer
  }
})
