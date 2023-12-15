import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() { // Renamed to Login
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    
        // Check if any of the fields are empty
        if (!username || !email || !password_hash) {
            console.log('Please fill in all fields');
            return; // Stop the function if any field is empty
        }
    
        // Proceed with the axios request if all fields are filled
        axios.post('http://localhost:3030/users', { username, email, password_hash })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder="Enter Username" className="form-control" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="e-mail">E-mail</label>
                        <input type="email" placeholder="Enter E-mail" className="form-control" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="form-control">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login; // Renamed to Login
