"use client"
import React from 'react'
import { useRouter } from "next/navigation"
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
  const router = useRouter()
  console.log(localStorage.getItem("user"));
    if (localStorage.getItem("user") !== null) {
        localStorage.removeItem("user");
     
      
      setTimeout(() => {

        router.push("/login");
        
      },4000)
      

        
    } else {
     
      alert("You haven't logged in yet ")
      router.push("/login")
      
        
    }


  return (
    <>
    <ToastContainer />
    <div className='absolute top-[65px] bg-white min-h-screen w-[100vw] '>Logged out please wait a second ...</div>
    </>
  )
}

export default page