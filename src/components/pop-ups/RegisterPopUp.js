// Story.js
import React, { useState, useEffect } from 'react';
import { Html } from '@react-three/drei';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import validation from '../RegistrationValidation';

const Register = ({ onBack }) => {
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


  //register feature
  // login functions
  const [values, setValues] = useState({
    username: '',
    email:'',
    password: ''
})

const navigate = useNavigate();
const [errors, setErrors] = useState({})

const handleInput =(event) => {
    setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
}


const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(validation(values));
    if(errors.username === "" && errors.email === "" && errors.password === ""){
        axios.post('http://localhost:8081/register', values)
        .then(res => {
          alert("Creating an Account Successfully")
        })
        .catch(err => console.log(err))
    }
}


  return (
    <Html center>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-75 p-8 w-screen h-screen flex flex-col items-center">
            <div className="text-3xl font-bold mb-4 text-white">
                <form onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder="Enter Username" className="form-control text-black" name='username' onChange={handleInput} />
                        <span>{errors.username && <span className='text-red'>{errors.username}</span>}</span>
                    </div>
                    <div >
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter email" className="form-control text-black" name='email' onChange={handleInput} />
                        <span>{errors.email && <span className='text-red'>{errors.email}</span>}</span>
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control text-black" name='password' onChange={handleInput} />
                        <span>{errors.password && <span className='text-red'>{errors.password}</span>}</span>
                    </div>
                    
                    <br></br>
                    <br></br>
                    
                    <button className="form-control" type='submit'>Create Account</button>

                    <br></br>
                    <br></br>



                </form>
            </div>
            
        </div>
    </Html>
  );
};

export default Register;