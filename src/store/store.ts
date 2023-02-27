import {configureStore, createSlice} from "@reduxjs/toolkit"

export interface User {
    id : number;
    name : string;
}

// const users = createSlice({
//     name : 'users',
//     initialState : [
//         {id : 1, name : 'User1'},
//         {id : 2, name : 'User2'}
//     ],
// })


export default configureStore({
    reducer : {
    }
})