import { setLoading } from "@/redux/authSlice";
import { AUTH_API_ENDPOINT } from "@/utils/constants";
import axios from "axios";
import { Eye, EyeOff, Loader2 } from "lucide-react"; // Import Eye and EyeOff icons
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { loading } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState(null); // State for error message
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const onSubmit = async (data) => {
        try {
            dispatch(setLoading(true));
            setErrorMessage(null); // Clear previous errors

            const response = await axios.post(`${AUTH_API_ENDPOINT}/login`, {
                email: data.email,
                password: data.password,
                role: data.role,
            });

            if (response.data.success) {
                toast(response.data.message);
                navigate("/");
            } else {
                setErrorMessage(response.data.message || "An unexpected error occurred.");
            }

            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
            setErrorMessage(error.response?.data?.message || "An unexpected error occurred.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <form
                className="w-full max-w-lg border border-gray-200 rounded-md p-6 bg-white"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h1 className="text-2xl text-center font-bold mb-4">
                    Login Career<span className="text-blue-500">Compass</span>
                </h1>

                <div className="my-2">
                    <Label>Email</Label>
                    <Input
                        type="email"
                        placeholder="jhon@example.com"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                </div>

                <div className="my-2 relative">
                    <Label>Password</Label>
                    <Input
                        type={showPassword ? "text" : "password"} // Toggle between text and password
                        placeholder="********"
                        {...register("password", { required: "Password is required" })}
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-10 transform -translate-y-1/2"
                        onClick={() => setShowPassword(prev => !prev)}
                    >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-5">
                    <RadioGroup className="flex items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="student"
                                className="cursor-pointer"
                                {...register("role", { required: "Role is required" })}
                            />
                            <Label htmlFor="r1">Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="recruiter"
                                className="cursor-pointer"
                                {...register("role", { required: "Role is required" })}
                            />
                            <Label htmlFor="r1">Recruiter</Label>
                        </div>
                    </RadioGroup>
                    {errors.role && <p className="text-red-600 font-bold text-center">{errors.role.message}</p>}
                </div>

                {errorMessage && <p className="text-red-600 my-2">{errorMessage}</p>}

                {loading ? (
                    <Button className="w-full my-4">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
                    </Button>
                ) : (
                    <Button type="submit" className="w-full my-4">
                        Login
                    </Button>
                )}

                <span className="flex items-center justify-center gap-2">
                    Don&apos;t have an account?{" "}
                    <Link className="text-blue-600 underline font-bold" to={"/sign-up"}>
                        Sign up
                    </Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
