import { configureStore, createSlice } from '@reduxjs/toolkit'

export interface Page{
    id : number,
    title : string
}

let page = createSlice({
	name : 'page',
  	initialState : [
        {
            id : 1,
            title : "Page A"
        },
        {
            id : 2,
            title : "Page B"
        },
        {
            id : 3,
            title : "Page C"
        }
    ] as Page[],
    reducers : {
        
    }
})

export default configureStore({
	reducer : {
		page : page.reducer //user 등록
	}
})
