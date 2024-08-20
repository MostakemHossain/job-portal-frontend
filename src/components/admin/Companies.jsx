import useGetAllCompanies from "@/hooks/useGEtAllCompanies"
import { setSearchCompanyByText } from "@/redux/companySlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Navbar from "../Shared/Navbar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import CompaniesTable from "./CompaniesTable"

const Companies = () => {
    const [input, setInput] = useState("");
    useGetAllCompanies();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input))

    }, [input])
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <div className="flex items-center justify-between my-5">
                    <Input
                        className="w-fit"
                        placeholder="filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>

                </div>
                <CompaniesTable />

            </div>
        </div >
    )
}

export default Companies