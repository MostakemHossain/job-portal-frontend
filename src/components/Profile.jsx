import { Contact, Mail, Pen } from "lucide-react"
import { useState } from "react"
import { useSelector } from "react-redux"
import AppliedJobTable from "./AppliedJobTable"
import Navbar from "./Shared/Navbar"
import UpdateProfileDialouge from "./UpdateProfileDialouge"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Label } from "./ui/label"

const skills = ["Html", "Css", "javaScript", "React"]

const Profile = () => {
    const [open, setOpen] = useState(false);
    const { user } = useSelector(state => state.auth);

    const isHaveResume = true;
    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
                <div className="flex justify-between">
                    <div className="flex items-center gap-4">
                        <Avatar className="size-24">
                            <AvatarImage src={user?.profile?.profilePhoto} />
                        </Avatar>
                        <div>
                            <h1 className="font-medium text-xl">{user?.fullName}</h1>
                            <p>{user?.bio}</p>
                        </div>

                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
                        <Pen />
                    </Button>


                </div>
                <div className="my-5">
                    <div className="flex items-center gap-3 my-2">
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className="my-5">
                    <h1>Skills</h1>
                    <div className="flex items-center gap-1">
                        {
                            <div className="font-bold">
                                {user?.skills}
                            </div>
                        }

                    </div>

                </div>
                <div className="grid w-full max-w-sm items-center gap-2">
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={user?.resume}
                            className="text-blue-500 hover:underline font-bold"
                        >
                            View {user?.fullName}'s Resume
                        </a>
                    }

                </div>


            </div>
            <div className="max-w-6xl mx-auto bg-white rounded-2xl">
                <h1 className="font-bold my-5 text-lg">Applied Jobs</h1>
                <AppliedJobTable />

            </div>

            <UpdateProfileDialouge open={open} setOpen={setOpen} />
        </div >
    )
}

export default Profile