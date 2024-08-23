import { setSearchedQuery } from "@/redux/jobSlice";
import { Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleJobHandler = () => {
        dispatch(setSearchedQuery(query))
        navigate("/browse")
    }
    return (
        <div className='text-center flex flex-col items-center justify-center mt-16 px-4'>
            <div className='flex flex-col gap-5 my-10'>
                <span className="md:flex items-center bg-gray-100 text-[#9a05ea] justify-start gap-2 font-bold text-2xl md:text-3xl">
                    No 1<h1 className="font-bold">Career <span className="text-blue-500">Compass</span> Website</h1>
                </span>
            </div>
            <div className="max-w-2xl mx-auto">
                <p className="font-semibold text-gray-600 text-sm md:text-base lg:text-lg">
                    Discover your dream job with Career Compass, the leading platform to connect professionals with opportunities. Let us guide you on your career journey with expert advice and thousands of job listings.
                </p>
            </div>
            <div className="flex w-full md:w-[60%] lg:w-[50%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-0 my-10">
                <Input
                    type="text"
                    placeholder="Search Your Dream Jobs"
                    className="w-full border-none outline-none"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Button onClick={handleJobHandler} className="rounded-r-full bg-[#6A38C2] hover:bg-[#9a05ea]">
                    <Search className="h-6 w-6 text-white" />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
