import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return <Outlet />
    } else {
        return <Navigate to="/" />
    };
};

export default ProtectedRoutes;