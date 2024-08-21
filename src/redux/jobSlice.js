import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob:null,
        allAdminJobs:[],
        searchJobByText:"",
    },
    reducers:{
        setJobs:(state,action)=>{
            state.allJobs=action.payload
        },
        setSingleJob:(state,action)=>{
            state.singleJob=action.payload
        },
        setAllAdminJob:(state,action)=>{
            state.allAdminJobs=action.payload
        },
        setSearchJobByText : (state, action) => {
            state.searchJobByText = action.payload;
      },
        
        
    }
})
export const {setJobs,setSingleJob,setAllAdminJob,setSearchJobByText}= authSlice.actions;
export default authSlice.reducer