import { authKey } from "@/constants/authKey";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/constants";
import { getFormLocalStorage } from "@/utils/local-storage";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const UpdateProfileDialog = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        fullName: user?.fullName || "",
        email: user?.email || "",
        phoneNumber: user?.phoneNumber || "",
        bio: user?.profile?.bio || "",
        skills: user?.profile?.skills?.join(", ") || "",
        file:user?.profile?.resume || "",
    });
    const token = getFormLocalStorage(authKey);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const fileChangeHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        const skillsArray = input.skills.split(",").map(skill => skill.trim());

        const formData = new FormData();
        formData.append('fullName', input.fullName);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', JSON.stringify(skillsArray));
        if (input.file) {
            formData.append('file', input.file);
        }

        try {

            const result = await axios.put(`${USER_API_ENDPOINT}/update-user`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${token}`,
                },
                withCredentials: true
            });
            dispatch(setUser(result.data.data))
            toast(result.data.message)
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };


    return (
        <Dialog open={open}>
            <DialogContent
                className="sm:max-w-[425px]"
                onInteractOutside={() => setOpen(false)}
            >
                <DialogHeader className="flex justify-between items-center">
                    <DialogTitle>Update Profile</DialogTitle>
                    <button
                        className="text-gray-500 hover:text-gray-700"
                        onClick={() => setOpen(false)}
                    >
                        {/* Close button content */}
                    </button>
                </DialogHeader>
                <form onSubmit={submitHandler}>
                    <div className="grid gap-4 py-4">
                        {/* Name Input */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="fullName" className="text-right">Name</Label>
                            <Input
                                id="fullName"
                                name="fullName"
                                value={input.fullName}
                                onChange={changeEventHandler}
                                className="col-span-3"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={input.email}
                                onChange={changeEventHandler}
                                className="col-span-3"
                            />
                        </div>

                        {/* Phone Number Input */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phoneNumber" className="text-right">Number</Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                value={input.phoneNumber}
                                onChange={changeEventHandler}
                                className="col-span-3"
                            />
                        </div>

                        {/* Bio Input */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="bio" className="text-right">Bio</Label>
                            <Input
                                id="bio"
                                name="bio"
                                value={input.bio}
                                onChange={changeEventHandler}
                                className="col-span-3"
                            />
                        </div>

                        {/* Skills Input */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="skills" className="text-right">Skills</Label>
                            <Input
                                id="skills"
                                name="skills"
                                value={input.skills}
                                onChange={changeEventHandler}
                                className="col-span-3"
                                placeholder="e.g., HTML, CSS, JavaScript"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="file" className="text-right">Resume</Label>
                            <Input
                                id="file"
                                name="file"
                                className="col-span-3"
                                type="file"
                                onChange={fileChangeHandler}
                                accept="application/pdf"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        {loading ? (
                            <Button className="w-full my-4">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading...
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full my-4">
                                Update Profile
                            </Button>
                        )}
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProfileDialog;
