import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
    {
        filterType: "Location",
        array: ["USA", "Canada", "UK", "Germany", "Australia", "India", "Japan"]
    },
    {
        filterType: "Industry",
        array: ["FrontEnd Developer", "Backend Developer", "Full Stack Developer", "Data Scientist", "Product Manager", "Designer", "QA Engineer"]
    },
    {
        filterType: "Salary",
        array: ["0-30K$", "30-50K$", "50-70K$", "70-90K$", "90-110K$", "110-130K$", "130-150K$"]
    },
];

const FilterCard = () => {
    return (
        <div className="w-full bg-white p-3 rounded-md">
            <h1 className="font-bold text-lg">Filter Jobs</h1>
            <hr className="mt-3" />
            <RadioGroup>
                {filterData.map((data, index) => (
                    <div key={index}>
                        <h2 className="font-bold text-lg">{data.filterType}</h2>
                        {
                            data.array.map((item, index) => {
                                return (
                                    <div className="flex items-center space-x-2 my-2">
                                        <RadioGroupItem value={item} />
                                        <Label>{item}</Label>

                                    </div>
                                )
                            })
                        }
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterCard;
