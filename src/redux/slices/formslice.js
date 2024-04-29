import { createSlice } from "@reduxjs/toolkit";

//---------------------------------Using Redux Toolkit--------------------------------
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

//--------------------------using Normal Redux-------------------------------
// const initaldata={
//     datas:[]
// }
// function formslice(state = initaldata, action) {
//     switch (action.type) {
//         case 'ADD':
//             return {...state,
//                 datas:[...state.datas,action.payload]
            
//             }

//         default:
//             return state
//     }

// }
// export function addData(data){
//     return {type:'ADD', payload:data}
// }
// export default formslice

