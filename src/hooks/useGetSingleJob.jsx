import { setSingleJob } from '@/redux/jobSlice';
import { JOB_API_ENDPOINT } from '@/utils/constants';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetSingle = (jobId) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchSingleJobs = async () => {
            try {
                const result = await axios.get(`${JOB_API_ENDPOINT}/${jobId}`, {
                    withCredentials: true

                });


                if (result.data.success) {
                    dispatch(setSingleJob(result.data.data))
                }

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchSingleJobs();

    }, [])
}

export default useGetSingle