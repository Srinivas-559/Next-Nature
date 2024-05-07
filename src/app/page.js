"use client"
import React, { useEffect } from 'react'

import Image from 'next/image'
import Navbar from '@/components/Navbar'
import AOS from "aos"
import "aos/dist/aos.css"

function page() {
  useEffect(() => {
    AOS.init();
    
  },[])

  return (
    
    <>
      <div className='absolute top-0 z-10 w-[100vw] h-[100vh]  '>
      
       
        
      <Image className='' src={'/Nature-mountains.jpeg'} alt="mountains " layout="fill" objectFit="cover" />
      
      
    </div>
      <div className='bg-black h-[100vh] w-[100vw] position absolute top-0 z-[20] opacity-40 home-image-animation'> </div>
      <div className='absolute text-white  font-serif text-9xl z-50 bottom-10 left-10 opacity-80 text-fade-out'>Nature Saviours</div>
      <section className='h-[100vh] w-[100vw]   '>
        <h1 className='font-serif font-bold text-4xl text-green-800 text-center mt-[4rem]'>Our Work</h1>
        <div className='w-[50vw] mt-[2rem] m-auto font-semibold font-serif text-xl text-green-900 leading-{2rem}'> 

"At Nature Saviors, we tirelessly work towards the preservation of Earth's ecosystems. Through reforestation, wildlife protection, and marine conservation, we strive to ensure a sustainable future. Join us in our mission to protect and cherish our planet."

        </div>
        <div className='cards'>
          <div className='card w-[80vw] border h-[50vh] m-auto mt-[4rem] flex '>


            <div className='h-full  w-[20%]  '>
              <img className='h-[100%] w-[100%]' src={'green.jpg'} alt = "card"  data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300" />

            </div>
            <div className='h-full  w-[20%]  '>
              <img className='h-[100%] w-[100%] object-cover' src={'pics/Sustainable-practices.jpeg'} alt = "card" data-aos="fade-right" data-aos-duration="1500"  data-aos-delay="100" />

            </div>
            <div className='h-full  w-[20%]  '>
              <img className='h-[100%] w-[100%] object-contain' src={'pics/ConservationProject.png'} alt = "card" data-aos="fade-up" data-aos-duration="1500"  />

            </div>
            <div className='h-full  w-[20%]  '>
              <img className='h-[100%] w-[100%] object-contain ' src={'pics/Environment-Education.jpeg'} alt = "card" data-aos="fade-left" data-aos-duration="1500"  data-aos-delay="100" />

            </div>
            <div className='h-full  w-[20%]  '>
              <img  className='h-[100%] w-[100%] object-cover' src={'pics/Community-Engagement.webp'} alt = "card" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" />

            </div>
            
            

          

          
        </div>
        </div>
      
      </section>
      

    </>
  )
}

export default page