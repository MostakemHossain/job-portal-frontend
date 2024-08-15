import { dateAgoCalculation } from "@/utils/dateAgeCalculation"
import { Bookmark } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

const Job = ({ job }) => {
    const navigate = useNavigate();



    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-y-gray-100">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{dateAgoCalculation(job?.createdAt) === 0 ? "Today" : `${dateAgoCalculation(job?.createdAt)}`} days ago</p>
                <Button variant="outline" size="icon" className="rounded-full"> <Bookmark /></Button>

            </div>
            <div className="flex items-center gap-2 my-2">
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={`${job?.company?.logo}`} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-bold text-lg">{job?.company.name}</h1>
                    <p className="text-sm text-gray-500">{job?.location}</p>
                </div>

            </div>
            <div>
                <h1 className="font-bold text-lg my-2">{job?.title}</h1>
                <p className="text-sm text-gray-600">{job?.description}.</p>
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
            <div className="flex items-center gap-4 mt-4">
                <Button onClick={() => navigate(`/description/${job._id}`)} variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save for later</Button>

            </div>
        </div>
    )
}

export default Job