import { authKey } from '@/constants/authKey';
import { setAllAppliedJob } from '@/redux/jobSlice';
import { APPLICATION_API_ENDPOINT } from '@/utils/constants';
import { getFormLocalStorage } from '@/utils/local-storage';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAppliedJob = () => {
    const dispatch = useDispatch();
    const token = getFormLocalStorage(authKey);
    useEffect(() => {
        const fetchAllAppliedJob = async () => {
            try {
                const res = await axios.get(
                    `${APPLICATION_API_ENDPOINT}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `${token}`
                        }
                    }
                );

                if (res.data.success) {
                    dispatch(setAllAppliedJob(res.data.data))
                }

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchAllAppliedJob();

    }, [])
}

export default useGetAppliedJob