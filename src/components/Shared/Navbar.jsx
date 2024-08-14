import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { authKey } from "@/constants/authKey";
import { setUser } from "@/redux/authSlice";
import { removeFormLocalStorage } from "@/utils/local-storage";
import { LogOut, User2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
    const { user } = useSelector(store => store.auth)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogout = () => {
       
        dispatch(setUser(null))
        removeFormLocalStorage(authKey);


    }

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center mx-auto max-w-7xl h-16">
            <div className="navbar-brand">
                <h1 className="text-2xl font-bold">
                    Career<span className="text-blue-500">Compass</span>
                </h1>
            </div>
            <div className="hidden md:flex items-center gap-12">
                <ul className="flex items-center gap-5 font-medium">
                    <li className="cursor-pointer">
                        <Link className="hover:text-[#6A38C2] hover:font-bold hover:scale-105" to={"/"}>
                            home
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link className="hover:text-[#6A38C2] hover:font-bold hover:scale-105" to={"/jobs"}>
                            Jobs
                        </Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link className="hover:text-[#6A38C2] hover:font-bold hover:scale-105" to={"/browse"}>
                            Browse
                        </Link>
                    </li>
                </ul>
                {!user ? (
                    <div className="flex items-center gap-3">
                        <Link to={"/login"}>
                            <Button variant="outline">Login</Button>
                        </Link>
                        <Link to={"/sign-up"}>
                            <Button className="bg-[#6A38C2] hover:bg-[#34038a]">Sign Up</Button></Link>
                    </div>
                ) : (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div className="flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                </Avatar>
                                <div>
                                    <h4 className="font-medium">Mostakem Hossain</h4>
                                    <p className="text-sm text-muted-foreground">I am a full stack developer</p>
                                </div>
                            </div>
                            <div className="flex flex-col text-gray-600 mt-5">
                                <div className="flex w-fit items-center gap-2 cursor-pointer">
                                    <User2 />
                                    <Button variant="link" ><Link to={"/profile"}>
                                        Profile
                                    </Link></Button>
                                </div>
                                <div className="flex w-fit items-center gap-2 cursor-pointer">
                                    <LogOut />
                                    <Button onClick={handleLogout} variant="link">Logout</Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </div>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <ul className="flex flex-col items-start p-4 font-medium">
                        <li className="cursor-pointer py-2">Home</li>
                        <li className="cursor-pointer py-2">Jobs</li>
                        <li className="cursor-pointer py-2">Browse</li>
                        {!user ? (
                            <div className="flex flex-col gap-3 mt-4">
                                <Link to={"/login"}>
                                    <Button variant="outline">Login</Button>
                                </Link>
                                <Link to={"/sign-up"}>
                                    <Button className="bg-[#6A38C2] hover:bg-[#34038a]">Sign Up</Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                        </Avatar>
                                        <div>
                                            <h4 className="font-medium">Mostakem Hossain</h4>
                                            <p className="text-sm text-muted-foreground">I am a full stack developer</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-gray-600 mt-5">
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <User2 />
                                            <Button variant="link">
                                                <Link to={"/profile"}>Profile</Link>
                                            </Button>
                                        </div>
                                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                                            <LogOut />
                                            <Button onClick={handleLogout} variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
