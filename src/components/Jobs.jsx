import useGetAllJob from "@/hooks/useGetAllJob";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "./Shared/Navbar";

const Jobs = () => {
    useGetAllJob();
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase())
                    || job.description.toLowerCase().includes(searchedQuery.toLowerCase())
                    || job.location.toLowerCase().includes(searchedQuery.toLowerCase());
            });
            setFilterJobs(filteredJobs);
        } else {
            setFilterJobs(allJobs);
        }
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 mt-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="">
                        <FilterCard />
                    </div>
                    <div className="lg:flex-1 h-[88vh] overflow-y-auto pb-5">
                        {filterJobs?.length <= 0 ? (
                            <span>No jobs found</span>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {filterJobs.map((item, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        key={index}>
                                        <Job job={item} />
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
