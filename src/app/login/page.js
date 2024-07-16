'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const formValidation = () => {
    if (!username || !password) {
      alert('Please fill all the fields');
      return false;
    }
    return true;
  };

  const submitLoginDetails = async () => {
    try {
      const response = await axios.post('/api/login', { username, password });

      if (response.data.message === 'success') {
        if (localStorage.getItem('user') === username) {
          toast.info('Already logged in!', { theme: 'dark', transition: Bounce });
          router.push("/");
        } else {
          localStorage.setItem('user', username);
          toast.success('Login successful!', { theme: 'light', transition: Bounce });
          router.push("/");
        }
      } else {
        alert('Invalid details, please register');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer />

      <div className='min-h-screen flex justify-center items-center bg-gray-100 pt-20'>
        <div className='max-w-screen-lg w-full flex flex-col md:flex-row mx-4'>
          <div className='md:w-1/2 bg-green-700 text-white flex flex-col justify-center items-center py-12'>
            <h1 className='text-5xl font-bold mb-4'>Login</h1>
            <p className='text-xl text-center'>Welcome back! Please login to your account.</p>
          </div>
          <div className='md:w-1/2 bg-white flex flex-col justify-center items-center py-12 px-8'>
            <div className='w-full max-w-md'>
              <div className='mb-4'>
                <label htmlFor='username' className='block text-black font-bold mb-2'>Username:</label>
                <input
                  id='username'
                  type='text'
                  className=' border  w-full py-2 px-3 text-black leading-tight focus:outline-none focus:-outline'
                  placeholder='Enter your username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='mb-6'>
                <label htmlFor='password' className='block text-black font-bold mb-2'>Password:</label>
                <input
                  id='password'
                  type='password'
                  className=' appearance-none border  w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:-outline'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className='bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4  focus:outline-none focus:-outline w-full'
                onClick={() => {
                  if (formValidation()) {
                    submitLoginDetails();
                  }
                }}
              >
                Login
              </button>
              <div className='text-center mt-4'>
                New user?{' '}
                <Link className='text-blue-500 cursor-pointer hover:underline' href="/register">
                  Register here
                </Link>
              </div>
            </div>
            <div className='mt-6 text-gray-600 text-center'>
              <div className='flex justify-center items-center gap-2'>
                <span className='bg-gray-200 px-3 py-1 -full'>or</span>
              </div>
            </div>
            <div className='mt-6'>
              <button
                className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 -full focus:outline-none focus:-outline'
                onClick={() => {
                  // Handle GitHub login functionality
                }}
              >
                <svg
                  className='h-6 w-6 inline-block mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 73 73'
                >
                  {/* GitHub SVG content */}
                </svg>
                Continue with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}