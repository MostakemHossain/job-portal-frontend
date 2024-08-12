import Job from "./Job";
import Navbar from "./Shared/Navbar";

const randomJobs = [1, 2, 3, 4, 5, 6];
const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <h1 className="font-bold text-xl my-10 md:text-start text-center">Search Result {randomJobs.length}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        randomJobs.map((item, index) => {
                            return (
                                <Job key={index} />
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Browse