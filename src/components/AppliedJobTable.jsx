import { useSelector } from "react-redux";
import { Badge } from "./ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const AppliedJobTable = () => {
    const { allAppliedJob } = useSelector(store => store.job);

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-500 text-white";
            case "accepted":
                return "bg-green-500 text-white";
            case "rejected":
                return "bg-red-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    return (
        <div>
            {allAppliedJob?.length > 0 ? (
                <Table>
                    <TableCaption>A list of your applied jobs</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Job Role</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {allAppliedJob.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell>{item?.job?.title}</TableCell>
                                <TableCell>{item?.job?.company?.name}</TableCell>
                                <TableCell className="text-right">
                                    <Badge className={getStatusBadgeClass(item.status)}>
                                        {item.status || "Pending"}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <p>You haven't applied for any jobs yet.</p>
            )}
        </div>
    );
};

export default AppliedJobTable;
