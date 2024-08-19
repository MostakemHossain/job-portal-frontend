import { setSingleCompany } from '@/redux/companySlice';
import { COMPANY_API_ENDPOINT } from '@/utils/constants';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetSingleCompanyByID = (companyId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const result = await axios.get(`${COMPANY_API_ENDPOINT}/${companyId}`, {
                    withCredentials: true

                });


                if (result.data.success) {
                    dispatch(setSingleCompany(result.data.data))
                }

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchCompany();

    }, [companyId, dispatch])
}

export default useGetSingleCompanyByID