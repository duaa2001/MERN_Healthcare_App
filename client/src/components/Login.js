import React, { useState } from "react";
import axios from "axios";
import { getBaseUrl } from "../environments/baseurl";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
    const [error, setError] = useState(''); // Error message state

    async function submit(e) {
        e.preventDefault();

        // Frontend validation
        if (username.length < 8) {
            setError('Username must be at least 8 characters long');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        const url = isSignUp ? `${getBaseUrl()}/api/register` : `${getBaseUrl()}/api/login`;

        try {
            const response = await axios.post(url, { username, password });
            if (response.data.success) {
                setLoginMessage(`Hey there, ${username}!`);
                setLoggedIn(true);
                localStorage.setItem('username', username); // Store username in localStorage
                setUsername('');
                setPassword('');
            } else {
                setError(response.data.message || 'Error during login or sign-up');
            }
        } catch (error) {
            setError(`${isSignUp ? 'Sign-up' : 'Login'} error: ${error.message}`);
        }
    }

    function logout() {
        setLoggedIn(false);
        setLoginMessage('');
        localStorage.removeItem('username'); // Remove username from storage when logging out
    }

    return (
        <div className="login-container">
            {loggedIn ? (
                <div className="login-message">
                    <h2>{loginMessage}</h2>
                    <button onClick={logout} className="logout-button">Logout</button>
                </div>
            ) : (
                <div className="login-form">
                    <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={submit}>
                        <div>
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">{isSignUp ? "Sign Up" : "Login"}</button>
                    </form>
                    <p>
                        {isSignUp ? (
                            <>
                                Already have an account?{" "}
                                <button onClick={() => setIsSignUp(false)} className="toggle-link">
                                    Log In
                                </button>
                            </>
                        ) : (
                            <>
                                Don't have an account?{" "}
                                <button onClick={() => setIsSignUp(true)} className="toggle-link">
                                    Sign Up
                                </button>
                            </>
                        )}
                    </p>
                </div>
            )}
        </div>
    );
}

export default Login;



