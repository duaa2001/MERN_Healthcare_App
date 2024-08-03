import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../environments/baseurl";

//similar to login, very basic 

function LSignup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();

        //call backend register new user 
        try {
            const response = await axios.post('http://localhost:5001/api/register', { username, password });
            console.log(response.data.message); // Log the response message
            if (response.data.success) {
                setUsername(''); // Clear username field
                setPassword(''); // Clear password field
                navigate('/login');
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
    }

    return (
        <div className="signup">
            <h2>Sign Up</h2>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default LSignup;

