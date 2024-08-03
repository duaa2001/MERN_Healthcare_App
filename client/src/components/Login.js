// can use online video for this
//Check out server.js file, backend is already set up for this, can organize after

//username and password 

// need a create account 

// need a login

import React, { useState } from "react";
import axios from "axios";
import {Link, Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./LSignup"; // Import LSignup component

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault(); //do not reload page upon submission

        //calling the backend login
        try {
            const response = await axios.post('http://localhost:5001/api/login', { username, password });
            // Handle successful login here
            console.log(response.data.message); // Log the response message
            if (response.data.success) {
                setUsername(''); // Clear username field
                setPassword(''); // Clear password field
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }
 
    // Setting it up
    return (
        <div className="login">
            <h2>Login</h2>
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
                <button type="submit">Login</button>
            </form>
            <p>
                OR... <Link to="/login/signup">Sign Up</Link>
            </p>
            <Routes>
                <Route path="signup" element={<SignUp />} /> {/* Add SignUp route here */}
            </Routes>
        </div>
    );
}

export default Login;