import { useNavigate } from "react-router-dom"
import Navbar from "../Shared/Navbar"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import CompaniesTable from "./CompaniesTable"

const Companies = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto my-10">
                <div className="flex items-center justify-between my-5">
                    <Input
                        className="w-fit"
                        placeholder="filter by name"
                    />
                    <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>

                </div>
                <CompaniesTable />

            </div>
        </div >
    )
}

export default Companies