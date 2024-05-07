"use client"
import React from 'react'
import axios from 'axios';
import {useState} from 'react'



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
           
           console.log(response.status);
        
           
          }
  return (
      <div className='h-[70vh] w-[50vw] bg-white absolute top-[150px] left-[400px]  rounded-lg overflow-hidden  border border-black '>
          <div className='flex flex-col justify-center items-center w-[100%] h-[100%]  gap-[1rem] font-serif shadow-lg'>
        Register ...
        <div className='flex flex-col '>

              <label className='font-medium' htmlFor='username'> Username</label>
              <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem] '  type='text' placeholder='Enter username' onChange={(e) => { setUsername(e.target.value) }} ></input>
        </div>

        <div className='flex flex-col '>

              <label htmlFor='email'> Email:</label>
              <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem]'   type='email' placeholder='Enter your Email' onChange={(e) => { setEmail(e.target.value) }} ></input>
        </div>
        <div className='flex flex-col '>

              <label htmlFor='dob'> Date of Birth:</label>
              <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem]'   type='date'  onChange={(e) => { setDob(e.target.value) }} ></input>
        </div>
        <div className='flex flex-col '>
          
     
              <label htmlFor='password'> Password: </label>
              <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem]'  type='password' placeholder='Enter your Password' onChange={(e) => { setPassword(e.target.value) }} ></input>
              <input className='w-[20rem] h-[2.5rem] border border-black px-[1rem] rounded-md mt-[0.5rem]'  type='password' placeholder='Confirm Password ' onChange={(e) => { setConfirmPassword(e.target.value) }} ></input>
        </div>
                    <button className='px-[1rem] py-[0.5rem] border border-black rounded-md bg-green-700 text-white ' onClick={() => {
                          if (validateFormData())
                                submitFormData();
                          else {
                                console.log(error);
                          }
                    }
                    }>Register</button>
            
          </div>
    </div>
  )
}
