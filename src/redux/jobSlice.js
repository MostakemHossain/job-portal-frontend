import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob:null,
        allAdminJobs:[],
        searchJobByText:"",
        allAppliedJob:[],
        searchedQuery:"",
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
        setAllAppliedJob : (state, action) => {
            state.allAppliedJob = action.payload;
      },
        setSearchedQuery : (state, action) => {
            state.searchedQuery = action.payload;
      },
        
        
    }
})
export const {setJobs,setSingleJob,setAllAdminJob,setSearchJobByText,setAllAppliedJob,setSearchedQuery}= authSlice.actions;
export default authSlice.reducer