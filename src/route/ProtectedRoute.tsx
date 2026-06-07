import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginContext from "../store/loginContext";
import Layout from "../component/Layout";

const ProtectedRoute = () => {
    const loginCtx = useContext(LoginContext);

    return loginCtx.isLogin ? (
        <Layout />
    ) : (
        <Navigate
            to="/login"
            replace
        />
    );
};

export default ProtectedRoute;