import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../store/loginContext";

function Header() {
    const loginCtx = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        loginCtx.logout();
        navigate("/login");
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

export default Header;