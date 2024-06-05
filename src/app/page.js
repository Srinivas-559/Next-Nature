"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import AOS from "aos"
import "aos/dist/aos.css"
import RaiseYourVoise from '@/components/RaiseYourVoise'
import PopularMeets from '@/components/PopularMeets'
import LearnMoreAboutUs from '@/components/LearnMoreAboutUs'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'




function page() {
  const router = useRouter();

  if (localStorage.getItem("user") == undefined) {
    router.push("/login");
  }

  useEffect(() => {
    AOS.init();
    
  }, [])
  
  




  return (    
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      <div className='sm:w-full absolute top-0 z-10 w-[100vw] h-[100vh]  '>
      
       
        
      <Image className='' src={'/Nature-mountains.jpeg'} alt="mountains " layout="fill" objectFit="cover" />
      
      
    </div>
      <div className='bg-black h-[100vh] w-[100vw] position absolute top-0 z-[20] opacity-40 home-image-animation'> </div>
      <div className='absolute text-white  font-serif text-9xl z-50 bottom-10 left-10 opacity-80 text-fade-out'>Nature Saviours</div>
      <section className='min-h-[100vh] w-[100vw]   '>
        <h1 className='font-serif font-bold text-2xl text-green-800 text-center mt-[4rem]'>Our Work</h1>
        <div className='w-[50vw] mt-[2rem] m-auto font-semibold font-serif text-lg text-green-900 leading-{2rem}'> 

"At Nature Saviors, we tirelessly work towards the preservation of Earth's ecosystems. Through reforestation, wildlife protection, and marine conservation, we strive to ensure a sustainable future. Join us in our mission to protect and cherish our planet."

        </div>
        <div className='  cards  flex justify-around items-center mx-[6rem] my-[6rem] '>
          <div className='flex flex-col items-center justify-center gap-5 rounded-xl p-3'>
          <lord-icon
    src="https://cdn.lordicon.com/wzrwaorf.json"
    trigger="hover"
    colors="primary:#121331,secondary:#109121"
    style={{width:'250px',height:'250px'}}>
</lord-icon>
            <h1 className='font-medium text-xl font-serif text-green-900 hover:underline'><Link href={'/meetup'}>Community Engagement</Link> </h1>
          </div>
          <div  className='flex flex-col items-center justify-center gap-5   rounded-xl p-3'>
          <lord-icon
    src="https://cdn.lordicon.com/qeemqlwz.json"
    trigger="hover"
    colors="primary:#121331,secondary:#109121"
    style={{width:'250px',height:'250px'}}>
</lord-icon>
             <h1 className='font-medium text-xl font-serif text-green-900 hover:underline'>Sustainable  Practices  </h1>
          </div>
          <div  className='flex flex-col items-center justify-center gap-5   rounded-xl p-3' >
          <lord-icon
    src="https://cdn.lordicon.com/lenjvibx.json"
    trigger="hover"
    colors="primary:#121331,secondary:#109121"
    style={{width:'250px',height:'250px'}}>
</lord-icon>
             <h1 className='font-medium text-xl font-serif text-green-900 hover:underline'>Environmental Education</h1>
          </div>
         
        </div>
        <div className='cards   flex justify-around items-center mx-[6rem] my-[6rem] '>
          <div className='flex flex-col items-center justify-center gap-5   rounded-xl p-3'>
          <lord-icon
    src="https://cdn.lordicon.com/rfgxevig.json"
    trigger="hover"
    colors="primary:#121331,secondary:#109121"
    style={{width:'250px',height:'250px'}}>
</lord-icon>
            <h1 className='font-medium text-xl font-serif text-green-900 hover:underline'> Volunteer Oppurtunities </h1>
          </div>
          <div className='flex flex-col items-center justify-center gap-5   rounded-xl p-3'>
          <lord-icon
    src="https://cdn.lordicon.com/suuelqth.json"
    trigger="hover"
    colors="primary:#121331,secondary:#109121"
    style={{width:'250px',height:'250px'}}>
</lord-icon>
             <h1 className='font-medium text-xl font-serif text-green-900 hover:underline'>  Research & Innovation  </h1>
          </div>
          
         
        </div>
      
      </section>
      <div className='h-[1px] w-[100vw] bg-gray-300'></div>
      <div className=""></div>
      <section className=' h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#90ee90_100%)]'>
       
        <RaiseYourVoise/>

      </section>
      
      <section>
        <PopularMeets/>
      </section>
      <div className='h-[1px] w-[100vw] bg-gray-300'></div>
      <section >
        <LearnMoreAboutUs/>
      </section>
      
      <Footer/>
    </>
  )
}

export default page