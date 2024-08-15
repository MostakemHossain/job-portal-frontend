import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"job",
    initialState:{
        allJobs:[],
    },
    reducers:{
        setJobs:(state,action)=>{
            state.allJobs=action.payload
        },
        
        
    }
})
export const {setJobs}= authSlice.actions;
export default authSlice.reducer