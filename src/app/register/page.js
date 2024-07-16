"use client"
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function validateFormData() {
    if (email && password && username && dob && confirmPassword) {
      if (email.includes('@')) {
        if (username.length > 6) {
          if (password.length > 6) {
            if (password === confirmPassword) {
              return true;
            } else {
              setError("Passwords do not match");
              return false;
            }
          } else {
            setError("Password must be at least 6 characters");
            return false;
          }
        } else {
          setError("Username must be at least 6 characters");
          return false;
        }
      } else {
        setError("Enter a valid email address");
        return false;
      }
    } else {
      setError("All fields are required");
      return false;
    }
  }

  async function submitFormData() {
    try {
      const response = await axios.post('/api/register', {
        email,
        dob,
        username,
        password,
      });
      if (response.data.message === 'success') {
        toast.success('Registered successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Registration failed. Please try again.");
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-screen bg-green-700 text-white flex flex-col justify-center items-center py-12">
          <h1 className="text-5xl font-bold mb-4">Register</h1>
          <p className="text-xl text-center">Create your account</p>
        </div>
        <div className="md:w-1/2 bg-white flex flex-col justify-center items-center pt-24 pb-8 px-8">
          <div className="w-full max-w-md">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
              <input
                id="username"
                type="text"
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
              <input
                id="email"
                type="email"
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
              <input
                id="dob"
                type="date"
                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
              <input
                id="password"
                type="password"
                className="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                id="confirmPassword"
                type="password"
                className="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full"
              onClick={() => {
                if (validateFormData()) {
                  submitFormData();
                } else {
                  toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                }
              }}
            >
              Register
            </button>
            <div className="text-center mt-4">
              Already a user? <Link className="text-blue-500 cursor-pointer hover:underline" href={'/login'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}