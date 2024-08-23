import useGetAllJob from "@/hooks/useGetAllJob";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import Navbar from "./Shared/Navbar";

const Browse = () => {
    useGetAllJob();
    const { allJobs } = useSelector((store) => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, [dispatch]);

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10 px-4">
                <h1 className="font-bold text-2xl mb-6 md:text-start text-center">
                    Search Results ({allJobs.length})
                </h1>
                {allJobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {allJobs.map((job) => (
                            <Job key={job._id} job={job} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500">
                        <p className="text-lg font-semibold">No jobs found</p>
                        <p className="text-sm mt-2">Try adjusting your search criteria or check back later.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Browse;
