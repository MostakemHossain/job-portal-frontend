import { authKey } from "@/constants/authKey";
import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/constants";
import { getFormLocalStorage } from "@/utils/local-storage";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "../Shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CreateCompanies = () => {
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState();
    const dispatch = useDispatch();
    const token = getFormLocalStorage(authKey);
    const registerACompany = async () => {

        try {
            const res = await axios.post(
                `${COMPANY_API_ENDPOINT}/register-a-company`,
                { name: companyName },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `${token}`
                    }
                }
            );
            if (res?.data?.success) {

                dispatch(setSingleCompany(res?.data?.data));
                toast.success(res?.data?.message);
                const companyId = res?.data?.data?._id
                navigate(`/admin/companies/${companyId}`);
            }

        } catch (error) {

            toast.error(error.response.data.message)

        }
    }
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <div className="my-10">
                    <h1 className="font-bold text-2xl">Your company Name</h1>
                    <p className="text-gray-500">What would you to give your company Name? You can change it later.</p>

                </div>
                <Label>Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="Enter your company name"
                    onChange={(e) => setCompanyName(e.target.value)}
                />
                <div className="flex items-center gap-2 my-10">
                    <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
                    <Button onClick={registerACompany}>Continue</Button>

                </div>

            </div>
        </div>
    )
}

export default CreateCompanies