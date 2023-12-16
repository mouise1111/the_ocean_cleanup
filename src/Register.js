import React, { useState} from "react";

function Register() { // Renamed to Login
 

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1>Signup</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder="Enter Username" className="form-control" onChange={e => setUsername(e.target.value)} />
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="form-control">Register</button>
                </form>
            </div>
            
        </div>
    );
}

export default Register; // Renamed to Login
