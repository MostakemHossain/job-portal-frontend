import { authKey } from '@/constants/authKey';
import { setAllAdminJob } from '@/redux/jobSlice';
import { JOB_API_ENDPOINT } from '@/utils/constants';
import { getFormLocalStorage } from '@/utils/local-storage';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    const token = getFormLocalStorage(authKey);
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(
                    `${JOB_API_ENDPOINT}/admin-job`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `${token}`
                        }
                    }
                );

                if (res.data.success) {

                    dispatch(setAllAdminJob(res?.data?.data))
                }

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchAllAdminJobs();

    }, [])
}

export default useGetAllAdminJobs