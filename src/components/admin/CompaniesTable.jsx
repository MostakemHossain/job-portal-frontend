import { AvatarImage } from "@radix-ui/react-avatar"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { Edit2, MoreHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../ui/avatar"
import { Popover, PopoverContent } from "../ui/popover"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader } from "../ui/table"

const CompaniesTable = () => {
    const navigate = useNavigate();

    const { companies, searchCompanyByText } = useSelector(state => state.company);
    const [filterCompany, setFilterCompany] = useState(companies);

    useEffect(() => {
        const filteredCompany = companies.length >= 0 && companies.filter((company) => {
            if (!searchCompanyByText) {
                return true

            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())

        })
        setFilterCompany(filteredCompany)

    }, [companies, searchCompanyByText])
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent register companies</TableCaption>
                <TableHeader>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany?.map((company) => (
                            <tr>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={`${company?.logo}`} />
                                    </Avatar>
                                </TableCell>
                                <TableCell>
                                    {company?.name}

                                </TableCell>
                                <TableCell>
                                    {company?.location}

                                </TableCell>
                                <TableCell>
                                    {
                                        company?.createdAt.split("T")[0]
                                    }

                                </TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={() => navigate(`/admin/companies/${company._id}`)} className="flex items-center justify-center cursor-pointer gap-2 w-fit">
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

export default CompaniesTable