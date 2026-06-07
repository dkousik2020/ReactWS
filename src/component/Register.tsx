import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Register Here</h3>

                <label>Name</label>
                <input
                    type="text"
                    placeholder="Name"
                    id="name"
                />

                <label>Username</label>
                <input
                    type="text"
                    placeholder="Email"
                    id="username"
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                />

                <button>Register</button>
                <div className="social">
                    <h4>
                        <Link to="/login">Login</Link>
                    </h4>
                </div>
            </form>
        </div>
    )
}

export default Register