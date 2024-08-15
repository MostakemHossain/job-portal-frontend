import useGetSingle from "@/hooks/useGetSingleJob";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobsDescription = () => {
    const isApplied = false;
    const params = useParams();
    const jobId = params.id;
    console.log(jobId)
    useGetSingle(jobId);
    const { singleJob } = useSelector(store => store.job);

    return (
        <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div className="flex-1">
                    <h1 className="font-bold text-2xl sm:text-3xl text-gray-800">{singleJob?.description}</h1>
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
                <h1 className="font-semibold">Description: <span className="font-normal pl-2">{singleJob?.description}</span></h1>
                <h1 className="font-semibold">Experience: <span className="font-normal pl-2">{singleJob?.experienceLevel} years</span></h1>
                <h1 className="font-semibold">Salary: <span className="font-normal pl-2">${singleJob?.salary}</span></h1>
                <h1 className="font-semibold">Total Applicants: <span className="font-normal pl-2">{singleJob?.applications?.length}</span></h1>
                <h1 className="font-semibold">
                    Posted Date: <span className="font-normal pl-2">{new Date(singleJob?.createdAt).toISOString().split("T")[0]}</span>
                </h1>

            </div>
        </div>
    );
}

export default JobsDescription;
