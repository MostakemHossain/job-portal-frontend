import { authKey } from "@/constants/authKey";
import { setApplicants } from "@/redux/applicationSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/constants";
import { getFormLocalStorage } from "@/utils/local-storage";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";

const Applicants = () => {
    const { applicants } = useSelector((store) => store.application);
    const dispatch = useDispatch();
    const token = getFormLocalStorage(authKey);
    const params = useParams();
    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(
                    `${APPLICATION_API_ENDPOINT}/${params.id}/applicant`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `${token}`
                        }
                    }
                );


                if (res.data.success) {

                    dispatch(setApplicants(res?.data?.data))
                }

            } catch (error) {
                console.log(error.message)
            }
        }
        fetchAllApplicants();

    }, [])
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="font-bold text-2xl mb-5">Applicants {applicants?.applications?.length}</h1>
                <ApplicantsTable />

            </div>
        </div>
    )
}

export default Applicants