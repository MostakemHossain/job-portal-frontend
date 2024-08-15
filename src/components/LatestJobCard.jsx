import { Badge } from "./ui/badge";

const LatestJobCard = ({ job }) => {
    return (
        <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 cursor-pointer transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="mb-4">
                <h1 className="font-semibold text-2xl text-gray-800">
                    {job?.company?.name}
                </h1>
                <p className="text-sm text-gray-500">{job?.location}</p>
            </div>
            <div className="mb-4">
                <h2 className="font-medium text-lg text-gray-700">
                    {job?.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {job?.description}
                </p>
            </div>
            <div className="flex items-center gap-3">
                <Badge className="bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-full" variant="ghost">
                    {job?.position} positions
                </Badge>
                <Badge className="bg-red-50 text-[#F82002] font-semibold px-3 py-1 rounded-full" variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className="bg-purple-50 text-[#7209b7] font-semibold px-3 py-1 rounded-full" variant="ghost">
                    {job?.salary}$
                </Badge>
            </div>
        </div>
    );
};

export default LatestJobCard;
