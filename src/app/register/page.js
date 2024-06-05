"use client"
import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import Link from 'next/link';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function page() {

      const [email, setEmail] = useState("");
      const [dob, setDob] = useState("");
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [error, setError] = useState("");

      function validateFormData() {
            if (!(email === "" || password === "" || username === "" || dob === "" || confirmPassword === "")) {
              if (email.includes('@')) {
                if (username.length > 6) {
                  if (password.length > 6) {
                    if (password === confirmPassword) {
                      return true;
        
                    } else {
                      setError("Password does not match");
                      return false;
                    }
        
                  }
                  else {
                    setError("minimum 6 characters are required for password ");
                    return false;
                  }
                } else {
                  setError("minimum 6 characters are required for username ");
                  return false;
                }
        
        
              } else {
                setError("Enter  valid email address");
                return false;
              }
        
            } else {
              setError("All fields are required");
              return false;
            }
        
        
        
      }
      



      async  function submitFormData() {
            const response = await axios.post('/api/register', {
              email,
              dob,
              username,
              password,
              
            });
           
        console.log(response.data.message);
        if (response.data.message === 'success') {
          toast.success('Registered ', {
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
        
           
          }
  return (

    <>
      <ToastContainer />
      <div className='absolute top-[65px] bg-white w-[100vw] h-[93vh] flex justify-center items-center '>
        <div className='w-2/3 h-3/4 border border-black flex rounded-lg font-serif shadow-lg shadow-green-700'>
          <div className='w-1/2 bg-green-700 flex justify-center items-center'>

            <h1 className=' text-7xl text-white'>Register</h1>

          </div>
          <div className='w-1/2 flex flex-col justify-center gap-5  '>
            

         
            <div className='flex flex-col mx-10   hover:scale-105 transition-all ease-linear'>
            <label className='' htmlFor='username  '>Username :</label>
              <input
                type='text'
                className='mt-2 p-2 outline-none focus:border-green-700 focus:border-2 rounded-lg border  '
                name='username'
                placeholder='Enter username'
                onChange={(e) => { setUsername(e.target.value) }}/>
            </div>
            <div className='flex flex-col mx-10   hover:scale-105 transition-all ease-linear'>
            <label className='' htmlFor='email'>Email :</label>
              <input
                className='mt-2 p-2 outline-none focus:border-green-700 focus:border-2 rounded-lg border  '
                name='email'
                placeholder='Enter your email'
                onChange={(e) => { setEmail(e.target.value) }}/>
            </div>
            <div className='flex flex-col mx-10   hover:scale-105 transition-all ease-linear'>
            <label className='' htmlFor='dob'>Date of Birth :</label>
              <input
                type='date'
                className='mt-2 p-2 outline-none focus:border-green-700 focus:border-2 rounded-lg border  '
                name='dob'
                placeholder='Enter your DOB'
                onChange={(e) => { setDob(e.target.value) }}/>
            </div>
            



            <div className='flex flex-col mx-10  hover:scale-105 transition-all ease-linear '>
            <label htmlFor='password'>Password :</label>
              <input
                type='password'
                className='mt-2 p-2 outline-none focus:border-green-700 focus:border-2 rounded-lg border '
                name='password'
                placeholder='Enter your password'
                onChange={(e) => { setPassword(e.target.value) }}/>
              <input
                type='password'
                className='mt-2 p-2 outline-none focus:border-green-700 focus:border-2 rounded-lg border '
                name='confirmPassword'
                placeholder='Confirm your password '
                onChange={(e) => { setConfirmPassword(e.target.value) }}/>
            </div>
            <div className='flex flex-col gap-5  mx-10'>
              <button className='p-2 bg-green-700 rounded-lg text-white hover:scale-105  transition-all ease-linear'
              onClick={() => {
                                       if (validateFormData())
                                             submitFormData();
                                       else {
                                             console.log(error);
                                       }
                                 }
                         }
              
              >Register</button>
              <div className='flex justify-center '>

              Already user?<Link className='hover:underline' href={'/login'} >Login</Link> 
              </div>
            </div>
            <div className='text-gray flex justify-center items-center '>
              <div className=' h-[1px] w-[25%] bg-black'></div><div className=' rounded-full mx-2 p-1 '>or</div><div className='h-[1px] w-[25%] bg-black'></div>
            </div>
            

          </div>
          
       </div>
      </div>
    </>






    //   <div className='h-[70vh] w-[50vw] bg-white absolute top-[150px] left-[400px]  rounded-lg overflow-hidden  border border-black '>
    //       <div className='flex flex-col justify-center items-center w-[100%] h-[100%]  gap-[1rem] font-serif shadow-lg'>
    //     Register ...
    //     <div className='flex flex-col '>

    //           <label className='font-medium' htmlFor='username'> Username</label>
    //           <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem] '  type='text' placeholder='Enter username' onChange={(e) => { setUsername(e.target.value) }} ></input>
    //     </div>

    //     <div className='flex flex-col '>

    //           <label htmlFor='email'> Email:</label>
    //           <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem]'   type='email' placeholder='Enter your Email' onChange={(e) => { setEmail(e.target.value) }} ></input>
    //     </div>
    //     <div className='flex flex-col '>

    //           <label htmlFor='dob'> Date of Birth:</label>
    //           <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem]'   type='date'  onChange={(e) => { setDob(e.target.value) }} ></input>
    //     </div>
    //     <div className='flex flex-col '>
          
     
    //           <label htmlFor='password'> Password: </label>
    //           <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem]'  type='password' placeholder='Enter your Password' onChange={(e) => { setPassword(e.target.value) }} ></input>
    //           <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem]'  type='password' placeholder='Confirm Password ' onChange={(e) => { setConfirmPassword(e.target.value) }} ></input>
    //     </div>
    //                 <button className='px-[1rem] py-[0.5rem] border border-black rounded-md bg-green-700 text-white ' onClick={() => {
    //                       if (validateFormData())
    //                             submitFormData();
    //                       else {
    //                             console.log(error);
    //                       }
    //                 }
    //          }>Register</button>
            
    //       </div>
    // </div>
  )
}
