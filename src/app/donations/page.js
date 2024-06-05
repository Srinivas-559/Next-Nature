"use client"
import React from 'react'
import DonationForm from '@/components/DonationForm'
import YourDonations from '@/components/YourDonations'


const page = () => {
  return (
      <div className='absolute w-[100vw] h-[100vh] top-[65px] font-serif bg-white overflow-scroll'>
          <div className=' h-[60%]  border border-black flex justify-center items-center  '>
              <div className='flex flex-col items-center gap-5'>
              <h1 className='text-6xl '> Contribute to Our Work </h1> 
                  <span className='text-xl'>"Support Our Mission: Your Donation Makes a Difference"</span>
                  <div className='buttons text-center mt-[80px] flex gap-5 justify-center'><button className='border  px-5 py-2  bg-black text-white rounded-lg hover:scale-105 transition-all ease-linear'>Your Donations</button>
        <button className='border bg-gray-100 text-black hover:bg-black hover:text-white px-5 py-2 rounded-lg hover:scale-105 transition-all ease-linear'> Donate </button></div>
              </div>
          </div>

          <section>
              <DonationForm />

              
             
          </section>
          <section>
               <YourDonations/>
          </section>
    </div>
  )
}

export default page