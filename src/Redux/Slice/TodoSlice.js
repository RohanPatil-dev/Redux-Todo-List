import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : "todo",
    initialState : [],
    reducers : {
       addItem : (state,action) =>{
          state.push(action.payload)
       },
       deleteItem : (state,action) =>{
         state.splice(action.payload,1)
       }
    }
})

export const {addItem,deleteItem} = TodoSlice.actions

export default TodoSlice.reducer