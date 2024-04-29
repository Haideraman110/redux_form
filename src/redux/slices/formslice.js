import { createSlice } from "@reduxjs/toolkit";


const formslice = createSlice({
    name: 'formslice',
    initialState: {
        datas: []                               
    },
    reducers: {                                 //micro reducers
        addData(state, action) {
            state.datas.push(action.payload)

        }
    }

})
export const { addData } = formslice.actions   //action creators
export default formslice.reducer