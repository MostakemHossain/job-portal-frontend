import { AvatarImage } from "@radix-ui/react-avatar"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { Edit2, MoreHorizontal } from "lucide-react"
import { useSelector } from "react-redux"
import { Avatar } from "../ui/avatar"
import { Popover, PopoverContent } from "../ui/popover"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader } from "../ui/table"

const CompaniesTable = () => {

    const { companies } = useSelector(state => state.company);
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent register companies</TableCaption>
                <TableHeader>
                    <TableHead>Logo</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableHeader>
                <TableBody>
                    {
                        companies?.map((company) => (
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
                                    {
                                        company?.createdAt.split("T")[0]
                                    }

                                </TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div className="flex items-center justify-center cursor-pointer gap-2 w-fit">
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