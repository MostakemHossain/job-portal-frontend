import { authKey } from "@/constants/authKey";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { JOB_API_ENDPOINT } from "@/utils/constants";
import { getFormLocalStorage } from "@/utils/local-storage";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "../Shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const AdminPostJob = () => {
    useGetAllAdminJobs();
    const navigate = useNavigate();
    const token = getFormLocalStorage(authKey);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const { companies } = useSelector(store => store.company);
    const [input, setInput] = useState({
        title: "",
        description: "",
        location: "",
        salary: 0,
        jobType: "",
        requirements: "",
        company: "",
        position: 0,
        experienceLevel: 0,
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const selectChangeHandler = (value) => {
        const selectedCompany = companies.find((company) => company?.name === value);
        setInput({ ...input, company: selectedCompany?._id });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInput({
            ...input,
            position: parseInt(input.position),
            experienceLevel: parseInt(input.experienceLevel),
            salary: parseInt(input.salary),

        })
        try {
            setLoading(true);
            const res = await axios.post(
                `${JOB_API_ENDPOINT}/post-a-job`,
                input,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`
                    }
                }
            );
            setLoading(false);

            if (res?.data?.success) {

                // dispatch(setAllAdminJob(res?.data?.data));

                toast.success(res?.data?.message);
                navigate(`/admin/jobs`);
                setLoading(false);
            }

        } catch (error) {
            setLoading(false);
            toast.error(error?.response?.data?.message);

        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center w-screen my-5">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="title">Job Title</Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                value={input.title}
                                onChange={changeEventHandler}
                                placeholder="Enter job title"
                                className="my-1"
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="location">Location</Label>
                            <Input
                                type="text"
                                name="location"
                                id="location"
                                value={input.location}
                                onChange={changeEventHandler}
                                placeholder="Enter job location"
                                className="my-1"
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="salary">Salary</Label>
                            <Input
                                type="number"
                                name="salary"
                                id="salary"
                                value={input.salary}
                                onChange={changeEventHandler}
                                placeholder="Enter salary range"
                                className="my-1"
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="jobType">Job Type</Label>
                            <Input
                                type="text"
                                name="jobType"
                                id="jobType"
                                value={input.jobType}
                                onChange={changeEventHandler}
                                placeholder="Enter job type (e.g., Full-time)"
                                className="my-1"
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="position">Position</Label>
                            <Input
                                type="number"
                                name="position"
                                id="position"
                                value={input.position}
                                onChange={changeEventHandler}
                                placeholder="Enter position"
                                className="my-1"
                                required
                            />
                        </div>
                        <div>
                            <Label htmlFor="experienceLevel">Experience Level</Label>
                            <Input
                                type="number"
                                name="experienceLevel"
                                id="experienceLevel"
                                value={input.experienceLevel}
                                onChange={changeEventHandler}
                                placeholder="Enter experience level (e.g., Junior, Senior)"
                                className="my-1"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="description">Job Description</Label>
                        <Input
                            name="description"
                            id="description"
                            value={input.description}
                            onChange={changeEventHandler}
                            placeholder="Enter job description"
                            className="my-1"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="requirements">Job Requirements</Label>
                        <Input
                            name="requirements"
                            id="requirements"
                            value={input.requirements}
                            onChange={changeEventHandler}
                            placeholder="Enter job requirements"
                            className="my-1"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        {companies?.length > 0 ? (
                            <Select onValueChange={selectChangeHandler}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a Company" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {companies.map((company) => (
                                            <SelectItem key={company._id} value={company.name}>
                                                {company.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        ) : (
                            <p className="text-red-600 font-bold text-center my-3">
                                Please register a company before posting a job.
                            </p>
                        )}
                    </div>
                    <div className="mt-6 w-full">
                        {loading ? (
                            <Button className="w-full my-4">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full my-4">
                                Post a Job
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminPostJob;
