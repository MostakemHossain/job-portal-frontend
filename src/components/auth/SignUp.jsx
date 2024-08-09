import { USER_API_ENDPOINT } from "@/utils/constants";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Loading state

    const onSubmit = async (data) => {
        setLoading(true); // Set loading to true when submission starts

        const formData = new FormData();
        formData.append("fullName", data.fullName);
        formData.append("email", data.email);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("password", data.password);
        formData.append("role", data.role);
        formData.append("file", data.profile[0]);

        try {
            const res = await axios.post(`${USER_API_ENDPOINT}/create-user`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false); // Set loading to false when submission ends
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50 p-4'>
            <form className="w-full max-w-lg border border-gray-200 rounded-md p-6 bg-white" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-2xl text-center font-bold mb-4">
                    Sign up Career<span className="text-blue-500">Compass</span>
                </h1>
                <div className="my-2">
                    <Label>Full Name</Label>
                    <Input
                        type="text"
                        placeholder="Mr. Jhon"
                        {...register("fullName", { required: "Full Name is required" })}
                    />
                    {errors.fullName && <p className="text-red-600">{errors.fullName.message}</p>}
                </div>
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
                    <Label>Phone Number</Label>
                    <Input
                        type="text"
                        placeholder="+000549282922"
                        {...register("phoneNumber", { required: "Phone Number is required" })}
                    />
                    {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber.message}</p>}
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
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <Label>Profile</Label>
                        <Input
                            accept="image/*"
                            type="file"
                            className="cursor-pointer"
                            {...register("profile", { required: "Profile picture is required" })}
                        />
                    </div>
                    {errors.profile && <p className="text-red-600">{errors.profile.message}</p>}
                </div>
                <Button type="submit" className="w-full my-4" disabled={loading}>
                    {loading ? "Signing up..." : "Sign up"}
                </Button>
                <span className="flex items-center justify-center gap-2">
                    Already have an account? <Link className="text-blue-600 underline font-bold" to={"/login"}>login</Link>
                </span>
            </form>
        </div>
    );
};

export default SignUp;
