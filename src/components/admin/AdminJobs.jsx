import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs"
import { setSearchJobByText } from "@/redux/jobSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Navbar from "../Shared/Navbar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import AdminJobsTable from "./AdminJobsTable"

const AdminJobs = () => {
    const [input, setInput] = useState("");
    useGetAllAdminJobs();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setSearchJobByText(input))

    }, [input])
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <div className="flex items-center justify-between my-5">
                    <Input
                        className="w-fit"
                        placeholder="filter by title or company name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/jobs/create")}>New Jobs</Button>

                </div>
                <AdminJobsTable />

            </div>
        </div >
    )
}

export default AdminJobs