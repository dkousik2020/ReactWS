import React, { useState } from "react";
import LoginContext from "../store/loginContext";

type Props = {
    children: React.ReactNode;
};

const LoginProvider = ({ children }: Props) => {
    const [isLogin, setIsLogin] = useState(
        !!localStorage.getItem("authToken")
    );

    const login = () => setIsLogin(true);
    const logout = () => {
        localStorage.removeItem("authToken");
        setIsLogin(false);
    };

    return (
        <LoginContext.Provider
            value={{
                isLogin,
                login,
                logout,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;