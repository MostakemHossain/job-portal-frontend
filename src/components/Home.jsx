import CategoryCarousel from "./CategoryCarousel"
import HeroSection from "./HeroSection"
import Navbar from "./Shared/Navbar"

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <CategoryCarousel />
        </div>
    )
}

export default Home