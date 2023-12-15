import React, {useState} from "react"; // Import useState
import axios from "axios";

function Login() { // Renamed to Login
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password_hash, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:3030/users', { 'username': username, 'email': email, 'password_hash': password_hash})
            .then(res => console.log(res))
            .catch(err => console.log(err)); // Corrected syntax
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
