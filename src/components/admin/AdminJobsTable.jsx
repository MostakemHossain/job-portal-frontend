import { PopoverTrigger } from "@radix-ui/react-popover"
import { Edit2, MoreHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Popover, PopoverContent } from "../ui/popover"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader } from "../ui/table"

const AdminJobsTable = () => {
    const navigate = useNavigate();

    const { allAdminJobs, searchJobByText } = useSelector(state => state.job);
    const [filterJob, setFilterJob] = useState(allAdminJobs);

    useEffect(() => {
        const filteredCompany = filterJob.length >= 0 && filterJob.filter((job) => {
            if (!searchJobByText) {
                return true

            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())

        })
        setFilterJob(filteredCompany)

    }, [allAdminJobs, searchJobByText])
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableHead>Company Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableHeader>
                <TableBody>
                    {
                        filterJob?.map((job) => (
                            <tr>


                                <TableCell>
                                    {job?.company?.name}


                                </TableCell>
                                <TableCell>
                                    {job?.title}


                                </TableCell>
                                <TableCell>
                                    {job?.salary}


                                </TableCell>
                                <TableCell>
                                    {job?.company?.location}


                                </TableCell>
                                <TableCell>
                                    {
                                        job?.createdAt.split("T")[0]
                                    }

                                </TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={() => navigate(`/admin/companies/${job._id}`)} className="flex items-center justify-center cursor-pointer gap-2 w-fit">
                                                <Edit2 className="w-fit" />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>

                                    </Popover>
                                </TableCell>
                            </tr>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable