"use client"
import React from 'react'
import Link from "next/link"
import { useState } from "react"
import axios from 'axios' 

export default function page() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const formValidation = () => {
        if (!username || !password) {
            alert('Please fill all the fields')
            return false;
        }
      return true;
    }
  
  const submitLoginDetails = async () => {
    const response = await axios.post('/api/login', {
      username,
      password
      
    });
   
   console.log(response.status);
    
  }

  return (
      <div className='absolute z-[2] top-[5rem] border-2  w-full h-[80%] flex justify-center items-center border-none '>
          <div className='w-[50%] h-[50%] m-auto   flex flex-col  gap-4 items-center flex-center bg-white rounded-lg'>
              <h1 className='text-center font-serif text-xl font-bold mt-[2rem]'>Login</h1>
              <div className='flex flex-col'>
                <label className='font-medium font-serif' htmlFor='username'>Username</label>
              <input name="username " className='border border-black mt-[1rem] w-[25rem] h-[2.5rem] p-2 rounded-md' placeholder='Enter Username' onChange={(e)=>{setUsername(e.target.value)}}></input>
                  
                </div>
              <div className='flex flex-col'>
                <label className='font-medium font-serif' htmlFor='password'>Password:</label>
              <input name="password " className='border border-black mt-[1rem]  w-[25rem] h-[2.5rem] p-2 rounded-md' placeholder='Enter Password ' onChange={(e)=>{setUsername(e.target.value)}}></input>
                  
              </div>
              <div className='flex flex-col justify-center items-center'>
          <button className='border py-[0.5rem] px-[2rem]  bg-green-700 text-white font-serif rounded-md ' onClick={() => {
            if (formValidation()) {
              submitLoginDetails();
            }
          } }>Login</button>
                  <div className='font-serif'>New User ?<Link className='hover:underline' href="/register" >Register</Link></div>
                  
              </div>


              
              
          </div>
    </div>
  )
}
