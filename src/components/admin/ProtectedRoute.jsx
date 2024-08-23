import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = useSelector((store) => store.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null || user?.role !== "recruiter") {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;
