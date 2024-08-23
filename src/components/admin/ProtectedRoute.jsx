import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useDispatch(store => store.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user === null || user?.role !== "recruiter") {
            navigate("/");
        }
    }, [])
    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoute