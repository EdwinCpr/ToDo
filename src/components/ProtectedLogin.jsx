import { Navigate, Outlet } from "react-router-dom";

const ProtectedLogin = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return <Navigate to="/home" />
    } else {
        return <Outlet />
    };
};

export default ProtectedLogin;