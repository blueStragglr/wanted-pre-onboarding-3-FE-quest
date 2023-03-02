import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  authenticated: false,
  userId: null,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authenticated = true
      state.userId = action.payload.userId
      console.log('authenticated : ', state.authenticated)
      console.log('userId : ', state.userId)
    },
    logout: state => {
      state.authenticated = false
      state.userId = null
      console.log('authenticated : ', state.authenticated)
      console.log('userId : ', state.userId)
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer