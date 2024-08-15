import useGetAllJob from "@/hooks/useGetAllJob"
import CategoryCarousel from "./CategoryCarousel"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import LatestJobs from "./LatestJobs"
import Navbar from "./Shared/Navbar"

const Home = () => {
    useGetAllJob()
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