import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "./Shared/Navbar";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-20 mt-10">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="">
                        <FilterCard />
                    </div>
                    <div className="lg:flex-1 h-[88vh] overflow-y-auto pb-5">
                        {jobsArray.length <= 0 ? (
                            <span>No jobs found</span>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {jobsArray.map((item, index) => (
                                    <div key={index}>
                                        <Job />
                                    </div>
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
