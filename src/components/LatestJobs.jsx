import { useSelector } from "react-redux";
import LatestJobCard from "./LatestJobCard";

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
    return (
        <div
            className="max-w-7xl mx-auto my-28"
        >
            <div className="text-4xl font-bold">
                <span className="text-[#6A38C2] mr-2 md:mr-0">Latest & Top </span>
                <span>Job Opening</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                    {
                        allJobs.length <= 0 ? <span className="text-red-400 font-bold text-center flex">No Jobs Available</span> : allJobs?.slice(0, 6).map((job, index) => <LatestJobCard key={job._id} job={job} />)
                    }
                </div>

            </div>
        </div>
    )
}

export default LatestJobs