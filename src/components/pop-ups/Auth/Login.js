// Story.js
import React, { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {setToken} from './Auth.js'
  
const Login = ({ onBack }) => {
  // Presskey event (for the controls tutorial)
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
  //  -----------------------------------------------------------------------------------------
  // login functions
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
   const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.Status === "Success") {
          console.log(res.data.Token);
          setToken(res.data.Token);
          navigate("/home");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
    };
    return (
      <Html center>
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <div className="flex flex-col justify-between w-full max-w-md px-8 py-16 space-y-8 bg-white border-8 border-lime-500 rounded-3xl ">
            <div>
              <h2 className="text-5xl font-extrabold text-center text-amber-600 joti-one">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={login}>
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div className="mb-2">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors border border-transparent rounded-md bg-amber-500 group hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                  onClick={login}
                >
                  Sign in
                </button>
              </div>
              <div className="">
                <a
                  href="/register"
                  className="font-thin transition-colors text-amber-800 hover:text-amber-600"
                >
                  New here? Sign Up instead
                </a>
              </div>
            </form>
          </div>
        </div>
      </Html>
    );
  
};

export default Login;
