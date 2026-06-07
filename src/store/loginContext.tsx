import React from "react";

type LoginContext = {
    isLogin: boolean;
    login: () => void;
    logout: () => void;
};

const LoginContext = React.createContext<LoginContext>({
    isLogin: false,
    login: () => { },
    logout: () => { },
});

export default LoginContext;