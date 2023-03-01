import {createSlice} from '@reduxjs/toolkit'

type stateType = {
  logIn: boolean
}

const initialState: stateType = {
  logIn: false
}

export const loggedReducer = createSlice({
  name: 'loggedReducer',
  initialState,
  reducers: {
    logIn: state => {
      state.logIn = true
      localStorage.setItem('logIn', 'true')
    },
    logOut: state => {
      state.logIn = false
      localStorage.removeItem('logIn')
    }
  }
})

export const {logIn, logOut} = loggedReducer.actions
export default loggedReducer.reducer
