import { authKey } from "@/constants/authKey";
import { APPLICATION_API_ENDPOINT } from "@/utils/constants";
import { getFormLocalStorage } from "@/utils/local-storage";
import axios from "axios";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";

const shortListingStatus = ["accepted", "rejected"];

const ApplicantsTable = () => {

    const { applicants: reduxApplicants } = useSelector((store) => store.application);


    const [applicants, setApplicants] = useState([]);

    const token = getFormLocalStorage(authKey);

    useEffect(() => {
        if (reduxApplicants && reduxApplicants.applications) {
            setApplicants(reduxApplicants.applications);
        }
    }, [reduxApplicants]);

    // Function to handle status changes
    const handleStatusChange = async (id, status) => {
        try {
            const res = await axios.put(
                `${APPLICATION_API_ENDPOINT}/${id}`,
                { status },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`,
                    },
                }
            );

            if (res.data.success) {
                toast.success(res.data.message);

                setApplicants((prevApplicants) =>
                    prevApplicants.map((item) =>
                        item._id === id ? { ...item, status } : item
                    )
                );
            } else {
                toast.error(res.data.message || "Failed to update status.");
            }
        } catch (error) {
            console.error(error.message);
            toast.error("An error occurred while updating the status.");
        }
    };

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent applied users</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Resume</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {applicants && applicants.length > 0 ? (
                        applicants.map((item, index) => (
                            <TableRow key={item._id || index}>
                                <TableCell>{item?.applicant?.fullName}</TableCell>
                                <TableCell>{item?.applicant?.email}</TableCell>
                                <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                                <TableCell>
                                    {item.applicant.resume ? (
                                        <a
                                            className="text-blue-600 underline"
                                            href={`${item?.applicant?.resume}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {item?.applicant?.fullName}.pdf
                                        </a>
                                    ) : (
                                        <div>NA</div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <span
                                        className={
                                            item?.status === "rejected"
                                                ? "text-red-600 font-bold"
                                                : item?.status === "accepted"
                                                    ? "text-green-600 font-bold"
                                                    : "text-gray-600"
                                        }
                                    >
                                        {item?.status}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    {item.applicant.createdAt.split("T")[0]}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Popover>
                                        <PopoverTrigger>
                                            <MoreHorizontal className="cursor-pointer" />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            {shortListingStatus.map((statusOption, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => handleStatusChange(item._id, statusOption)}
                                                    className="cursor-pointer hover:bg-gray-200 p-2"
                                                >
                                                    <span>{statusOption}</span>
                                                </div>
                                            ))}
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan="7" className="text-center">
                                No applicants found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ApplicantsTable;
