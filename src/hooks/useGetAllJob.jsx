import { setJobs } from '@/redux/jobSlice';
import { JOB_API_ENDPOINT } from '@/utils/constants';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJob = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);
    console.log(searchedQuery)
    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                const result = await axios.get(`${JOB_API_ENDPOINT}?searchTerm=${searchedQuery}`, {
                    withCredentials: true

                });

                if (result.data.success) {
                    dispatch(setJobs(result.data.data))
                }

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchAllJobs();

    }, [])
}

export default useGetAllJob