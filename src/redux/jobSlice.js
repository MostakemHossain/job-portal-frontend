import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob:null
    },
    reducers:{
        setJobs:(state,action)=>{
            state.allJobs=action.payload
        },
        setSingleJob:(state,action)=>{
            state.singleJob=action.payload
        },
        
        
    }
})
export const {setJobs,setSingleJob}= authSlice.actions;
export default authSlice.reducer