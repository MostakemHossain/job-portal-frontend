import { AUTH_API_ENDPOINT } from "@/utils/constants";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`${AUTH_API_ENDPOINT}/login`, {
                email: data.email,
                password: data.password,
                role: data.role
            });
            if (response.data.success) {
                toast(response.data.message)
                navigate("/")

            }
        } catch (error) {
            console.error(error.response?.data || error.message);
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

                <div className="my-2">
                    <Label>Password</Label>
                    <Input
                        type="password"
                        placeholder="********"
                        {...register("password", { required: "Password is required" })}
                    />
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
                    {errors.role && <p className="text-red-600">{errors.role.message}</p>}
                </div>

                <Button type="submit" className="w-full my-4">Login</Button>

                <span className="flex items-center justify-center gap-2">
                    Don&apos;t have an account? <Link className="text-blue-600 underline font-bold" to={"/sign-up"}>Sign up</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;
