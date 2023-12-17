// Story.js
import React, { useState,useEffect } from 'react';
import { Html } from '@react-three/drei';
import axios from "axios";
import validation from '../LoginValidation';

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
//  -----------------------------------------------------------------------------------------
  // login functions
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    
    const [errors, setErrors] = useState({})

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name] : [event.target.value]}))
    }
  

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password ===""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data ==="Login Successfully"){
                    alert("Login Successfull")
                }else{
                    alert("No Record Exists")
                }
            })
            .catch(err => console.log(err))
        }
        console.log('hello ?!')
    }


  return (
    <Html center>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-75 p-8 w-screen h-screen flex flex-col items-center">
            <div className="text-3xl font-bold mb-4 text-white">
                <form onSubmit={handleSubmit}>
                    

                    <div >
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Enter email" className="form-control text-black" name='email' onChange={handleInput} />
                        <span>{errors.email && <span className='text-red'>{errors.email}</span>}</span>
                    </div>
                    
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter Password" className="form-control text-black" name='password' onChange={handleInput} />
                        <span>{errors.password && <span className='text-red'>{errors.password}</span>}</span>
                    </div>
                    
                    <br></br>
                    <br></br>

                    <button className="form-control" type='submit'>Login</button>

                    <br></br>
                    <br></br>


                </form>
            </div>
            
        </div>
    </Html>
  );
};

export default Login;