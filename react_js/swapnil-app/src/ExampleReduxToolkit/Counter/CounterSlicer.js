import { createSlice } from '@reduxjs/toolkit'


export const counterSlice=createSlice({
name:'counter',
initialState:{count: 0},
reducers:{
    increment:function(state,action){
        state.count=state.count+1       
    },
    decrement:function(state,action){
        state.count-=1
    }
}

})



export default counterSlice.reducer;
export const {increment,decrement}=counterSlice.actions