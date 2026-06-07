import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="container">
            <aside className="sidebar">
                <h2>My App</h2>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <Header />
            </aside>
            <main className="contentt">
                <Outlet />
            </main>
        </div>
    );
}