import { AvatarImage } from "@radix-ui/react-avatar"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { Edit2, MoreHorizontal } from "lucide-react"
import { Avatar } from "../ui/avatar"
import { Popover, PopoverContent } from "../ui/popover"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader } from "../ui/table"

const CompaniesTable = () => {
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
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="data:image/png;base64,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" />


                        </Avatar>
                    </TableCell>
                    <TableCell>
                        Company Name

                    </TableCell>
                    <TableCell>
                        18-07-24

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
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable