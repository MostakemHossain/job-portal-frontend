import LatestJobCard from "./LatestJobCard"
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const LatestJobs = () => {
    return (
        <div
            className="max-w-7xl mx-auto my-28"
        >
            <div className="text-4xl font-bold">
                <span className="text-[#6A38C2] mr-2 md:mr-0">Latest & Top </span>
                <span>Job Opening</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
                    {
                        randomJobs.slice(0, 6).map((job, index) => <LatestJobCard key={index} />)
                    }
                </div>

            </div>
        </div>
    )
}

export default LatestJobs