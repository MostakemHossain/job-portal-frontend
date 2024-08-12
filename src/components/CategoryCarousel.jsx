import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Graphic Designer"
];

const CategoryCarousel = () => {
    return (
        <div className="px-4">
            <Carousel className="w-full max-w-xl mx-auto my-8 md:my-16">
                <CarouselContent className="flex">
                    {category.map((cat, index) => (
                        <CarouselItem key={index} className="w-full lg:w-1/2 flex-shrink-0 px-2">
                            <Button variant="outline" className="w-full py-2 rounded-full text-sm sm:text-base">
                                {cat}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 top-1/2" />
                <CarouselNext className="absolute right-0 transform -translate-y-1/2 top-1/2" />
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;
