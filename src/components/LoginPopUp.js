// Story.js
import React, { useState,useEffect } from 'react';
import { Html } from '@react-three/drei';
import axios from "axios";

const Login = ({ onBack }) => {
    // Presskey event (for the controls tutorial)
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        onBack();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onBack]);

  // login functions
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    
        // Check if any of the fields are empty
        if (!username || !password) {
            console.log('Please fill in all fields');
            return; // Stop the function if any field is empty
        }
    
        // Proceed with the axios request if all fields are filled
        axios.post('http://localhost:8081/login', { username, password })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


  return (
    <Html center>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-75 p-8 w-screen h-screen flex flex-col items-center">
            <div className="text-3xl font-bold mb-4 text-white">
                <form onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder="Enter Username" className="form-control text-black" onChange={e => setUsername(e.target.value)} />
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control text-black" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className="form-control">Login</button>
                </form>
            </div>
            
        </div>
    </Html>
  );
};

export default Login;