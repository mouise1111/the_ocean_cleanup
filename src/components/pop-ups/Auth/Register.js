// Story.js
import React, { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validation from "../../../helpers/RegistrationValidation";

const Register = ({ onBack }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        onBack();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onBack]);

  //register feature
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");

  const register = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3030/register", {
      username: username,  
      email: email,
      password: password,
      }).then((response) => {
        console.log(response);
        if(response.data.Status === "Success"){
          alert("ACCOUNT CREATED SUCCESSFULLY");
        }else{
          setRegisterStatus(response.data.Error);
          alert("ERROR IN CREATING ACCOUNT: " + response.data.Error); // Show the specific error
        }
      }).catch((error) => {
        // Handle any other errors
        console.error("Registration error:", error);
        alert("An error occurred during registration.");
      });
      
  }


  return (
    <Html center>
      <div className="flex flex-col items-center justify-center w-screen h-screen ">
        <div className="flex flex-col justify-between w-full max-w-md px-8 py-16 space-y-8 bg-white border-8 border-lime-500 rounded-3xl ">
          <div>
            <h2 className="text-5xl font-extrabold text-center text-amber-600 joti-one">
              Get on Board
            </h2>
          </div>
          <form
            onSubmit={register}
            className="flex flex-col justify-between h-full space-y-4 "
          >
            <div>
              <label htmlFor="Username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                name="username"
                onChange={(e) => {setUsername(e.target.value)}}
                />
             
            </div>
            <div className="">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter email"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                name="email"
                onChange={(e) => {setEmail(e.target.value)}}
              />
              
            </div>

            <div>
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                placeholder="Enter Password"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                name="password"
                onChange={(e) => {setPassword(e.target.value)}}
              />
             
            </div>
            <button
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors border border-transparent rounded-md bg-amber-500 group hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
              type="submit"
            >
              Create Account
            </button>
            <div className="">
              <a
                href="/login"
                className="font-thin transition-colors text-amber-800 hover:text-amber-600"
              >
                Already have an account? Login instead
              </a>
            </div>
          </form>
        </div>
      </div>
    </Html>
  );
};

export default Register;
