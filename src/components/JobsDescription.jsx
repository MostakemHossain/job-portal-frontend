import { authKey } from "@/constants/authKey";
import useGetSingle from "@/hooks/useGetSingleJob";
import { setSingleJob } from "@/redux/jobSlice";
import { APPLICATION_API_ENDPOINT } from "@/utils/constants";
import { getFormLocalStorage } from "@/utils/local-storage";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobsDescription = () => {
    const params = useParams();
    const navigate = useNavigate();
    const jobId = params?.id;
    const { user } = useSelector((store) => store.auth);
    const token = getFormLocalStorage(authKey);

    useGetSingle(jobId);
    const { singleJob, loading } = useSelector(store => store.job);

    const isInitiallyApplied = singleJob?.applications?.some(app => app?.applicant == user?._id) || false;
    

    const [isApplied, setIsApplied] = useState(isInitiallyApplied);
    const dispatch = useDispatch();

    const formattedDate = singleJob?.createdAt ? new Date(singleJob.createdAt).toISOString().split("T")[0] : "N/A";

    const applyJobHandler = async () => {
        if (!user) {

            navigate("/login");
            return;
        }

        try {
            const res = await axios.post(
                `${APPLICATION_API_ENDPOINT}/apply-a-job/${jobId}`,
                {},
                {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            );
            if (res.data.success) {
                setIsApplied(true);
                const updateSingleJob = { ...singleJob, applications: [...singleJob?.applications, { applicant: user?._id }] };
                dispatch(setSingleJob(updateSingleJob));

                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex-1">
                    <h1 className="font-bold text-2xl sm:text-3xl text-gray-800">{singleJob?.title}</h1>
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                        <Badge className="bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full" variant="ghost">
                            {singleJob?.position} positions
                        </Badge>
                        <Badge className="bg-red-50 text-[#F82002] font-semibold px-3 py-1 rounded-full" variant="ghost">
                            {singleJob?.jobType}
                        </Badge>
                        <Badge className="bg-purple-50 text-[#7209b7] font-semibold px-3 py-1 rounded-full" variant="ghost">
                            {singleJob?.salary}$
                        </Badge>
                    </div>
                </div>
                <Button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`mt-4 sm:mt-0 sm:ml-4 rounded-lg transition-all duration-300 ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <div className="border-b-2 border-gray-300 mt-8 mb-6">
                <h1 className="font-medium text-lg text-gray-700 pb-4">Job Description</h1>
            </div>
            <div className="space-y-3 text-gray-700">
                <h1 className="font-semibold">Role: <span className="font-normal pl-2">{singleJob?.title}</span></h1>
                <h1 className="font-semibold">Location: <span className="font-normal pl-2">{singleJob?.location}</span></h1>
                <h1 className="font-semibold">Description: <span class="font-normal pl-2">{singleJob?.description}</span></h1>
                <h1 className="font-semibold">Experience: <span class="font-normal pl-2">{singleJob?.experienceLevel} years</span></h1>
                <h1 className="font-semibold">Salary: <span class="font-normal pl-2">${singleJob?.salary}</span></h1>
                <h1 className="font-semibold">Total Applicants: <span class="font-normal pl-2">{singleJob?.applications?.length}</span></h1>
                <h1 className="font-semibold">
                    Posted Date: <span className="font-normal pl-2">{formattedDate}</span>
                </h1>
            </div>
        </div>
    );
};

export default JobsDescription;
