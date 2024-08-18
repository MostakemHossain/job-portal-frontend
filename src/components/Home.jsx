import useGetAllJob from "@/hooks/useGetAllJob"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CategoryCarousel from "./CategoryCarousel"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import LatestJobs from "./LatestJobs"
import Navbar from "./Shared/Navbar"

const Home = () => {
    useGetAllJob();
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.role === 'recruiter') {
            navigate('/admin/companies')
        }

    }, [])
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CategoryCarousel />
            <LatestJobs />
            <Footer />
        </div>
    )
}

export default Home