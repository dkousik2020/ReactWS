import { useContext, useState, type ChangeEvent } from "react";
import { ApiService } from "../network/Network";
import { useNavigate } from "react-router-dom";
import LoginContext from "../store/loginContext";

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: {
        id: number;
        email: string;
        name: string;
    };
}

const Login: React.FC = () => {
    const loginCtx = useContext(LoginContext);

    // State management for form inputs
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // State management for API interaction
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const navigate = useNavigate();

    // Handle typing inputs safely with explicit types
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    // Form submission logic
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Basic validation
        if (!email || !password) {
            setError('Please fill in all fields.');
            setIsLoading(false);
            return;
        }

        console.log(email, password);
        try {
            const response = await ApiService.post<
                LoginResponse,
                LoginRequest
            >("http://localhost:3000/api/login", { email, password });
            console.log(response);

            const data = response as LoginResponse;

            if (!data.token) {
                // Handle server side validation/errors (e.g. 400, 401, 500)
                throw new Error('Invalid credentials or login failed.');
            }

            localStorage.setItem("authToken", data.token);
            loginCtx.login();
            setSuccess(true);

            setTimeout(() => {
                navigate('/');
            }, 1500);

        } catch (err: any) {
            setError(err.message || 'Login failed. Please try again.');
        } finally {
            //setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Account Sign In</h2>

                {error && <div style={styles.errorAlert}>{error}</div>}
                {success && <div style={styles.successAlert}>Login successful! Redirecting...</div>}

                <div style={styles.inputGroup}>
                    <label htmlFor="email" style={styles.label}>Email Address</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={isLoading}
                        placeholder="name@company.com"
                        style={styles.input}
                        required
                    />
                </div>

                <div style={styles.inputGroup}>
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        disabled={isLoading}
                        placeholder=""
                        style={styles.input}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    style={isLoading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
                >
                    {isLoading ? 'Verifying...' : 'Sign In'}
                </button>
            </form>
        </div>
    )
}

export default Login

// Basic inline styling for out-of-the-box UI usability
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f3f4f6',
        fontFamily: 'system-ui, sans-serif'
    },
    form: {
        background: '#ffffff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
    },
    title: {
        marginBottom: '24px',
        fontSize: '24px',
        textAlign: 'center',
        color: '#1f2937'
    },
    inputGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '500',
        color: '#4b5563'
    },
    input: {
        width: '100%',
        padding: '10px 14px',
        borderRadius: '6px',
        border: '1px solid #d1d5db',
        fontSize: '16px',
        boxSizing: 'border-box',
        color: '#4b5563'
    },
    button: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#2563eb',
        color: '#ffffff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '10px'
    },
    buttonDisabled: {
        backgroundColor: '#93c5fd',
        cursor: 'not-allowed'
    },
    errorAlert: {
        padding: '12px',
        backgroundColor: '#fee2e2',
        color: '#b91c1c',
        borderRadius: '6px',
        marginBottom: '20px',
        fontSize: '14px'
    },
    successAlert: {
        padding: '12px',
        backgroundColor: '#dcfce7',
        color: '#15803d',
        borderRadius: '6px',
        marginBottom: '20px',
        fontSize: '14px'
    }
};