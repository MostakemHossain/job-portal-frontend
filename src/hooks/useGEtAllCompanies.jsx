import { authKey } from '@/constants/authKey';
import { setCompanies } from '@/redux/companySlice';
import { COMPANY_API_ENDPOINT } from '@/utils/constants';
import { getFormLocalStorage } from '@/utils/local-storage';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();
    const token = getFormLocalStorage(authKey);
    useEffect(() => {
        const fetchAllCompanies = async () => {
            try {
                const res = await axios.get(
                    `${COMPANY_API_ENDPOINT}/get-my-company`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `${token}`
                        }
                    }
                );

                if (res.data.success) {
                    console.log(res.data.success)
                    dispatch(setCompanies(res.data.data))
                }

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchAllCompanies();

    }, [])
}

export default useGetAllCompanies