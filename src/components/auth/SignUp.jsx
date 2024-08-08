import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { RadioGroup } from "../ui/radio-group"

const SignUp = () => {
    return (
        <div className='flex items-center justify-center min-h-screen max-w-7xl bg-gray-50'>
            <form className="w-1/2 border border-gray-200 rounded-md p-4 my-20">
                <h1 className="text-2xl flex items-center justify-center font-bold">
                    Sign up Career<span className="text-blue-500">Compass</span>
                </h1>
                <div className="my-2">
                    <Label>Full Name</Label>
                    <Input
                        type="text"
                        placeholder="Mr. Jhon"
                    />
                </div>
                <div className="my-2">
                    <Label>Email</Label>
                    <Input
                        type="email"
                        placeholder="jhon@example.com"
                    />
                </div>
                <div className="my-2">
                    <Label>Phone Number</Label>
                    <Input
                        type="text"
                        placeholder="+000549282922"
                    />
                </div>
                <div className="my-2">
                    <Label>Password</Label>
                    <Input
                        type="password"
                        placeholder="********"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <RadioGroup className="flex items-center gap-4 my-5" >
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="student"
                                className="cursor-pointer"
                            />
                            <Label htmlFor="r1">Student</Label>

                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type="radio"
                                name="role"
                                value="recruiter"
                                className="cursor-pointer"
                            />
                            <Label htmlFor="r1">Recruiter</Label>

                        </div>
                    </RadioGroup>
                    <div className="flex items-center gap-2">
                        <Label>Profile</Label>
                        <Input
                            accept="image/*"
                            type="file"
                            className="cursor-pointer"

                        />

                    </div>

                </div>
                <Button type="submit" className="w-full my-4">Sign up</Button>
                <span className="flex items-center justify-center gap-2">
                    Already have an account?   <Link className="text-blue-600 underline font-bold" to={"/login"}>login</Link>
                </span>
            </form>
        </div>
    )
}

export default SignUp