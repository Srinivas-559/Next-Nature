"use client"
import React, { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function page() {
  useEffect(() => {
    AOS.init()
    
  },[])
  return (
    <>
      
      <div className='absolute z-[10] top-0 '>
        <img className='h-[80vh] w-[100vw]' src={'wonders/Mount-Everest.jpeg'}></img>
  
      </div>
      <div className='bg-black h-[80vh] w-[100vw] opacity-[0.5] absolute top-0 z-[11]'></div>
      <div className=' absolute z-[12] text-[8rem] text-white top-[60%] font-serif '>
        <h1 className='ml-[2rem]  ' data-aos="fade-in" data-aos-duration="3000" data-aos-offset="300">Nature's Wonders</h1>
      </div>

      <div className='h-[5px] w-[90vw] bg-black m-auto ' data-aos="fade-up" data-aos-duration="1500"></div>
      <div className=' flex my-[5rem]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-serif font-semibold m-4  self-start' data-aos="fade-right" data-aos-duration="1500">Niagara Falls</h1>
          <div className='h-[5px] w-[50%] mr-auto mx-4 bg-red-800 rounded-full' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="100" data-aos-delay="300"></div>
          <p className='text-xl font-semibold  font-serif mt-[3rem] m-4' data-aos="fade-up " data-aos-duration="1500" data-aos-delay="300">  Niagara Falls: where majestic cascades adorn the border, weaving a tale of natural wonder between Canada and the United States, captivating millions with its breathtaking allure and providing hydroelectric power to both nations.</p>

        </div>

        <img className='w-[50%] ml-auto m-4 ' src='wonders/Niagara Falls.jpeg' data-aos="fade-up" data-aos-duration="1500"></img>
      </div>
      <div className='h-[5px] w-[90vw] bg-black m-auto ' data-aos="fade-up" data-aos-duration="1500"></div>
      <div className=' flex my-[5rem]'>
        <img className='w-[50%] h-[60%] m-4 ' src='wonders/Grand-Canyon.jpeg' data-aos="fade-up" data-aos-duration="1500"></img>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-serif font-semibold m-4  self-start' data-aos="fade-left" data-aos-duration="1500">Grand Canyon</h1>
          <div className='h-[5px] w-[50%] mr-auto mx-4 bg-red-800 rounded-full' data-aos="fade-left" data-aos-duration="1500" data-aos-offset="100" data-aos-delay="300"></div>
          <p className='text-xl font-semibold  font-serif mt-[3rem] m-4' data-aos="fade-up " data-aos-duration="1500" data-aos-delay="300"> The Grand Canyon, a geological marvel, reveals the Earth's history in its layered walls, captivating all who behold its vastness. In its depths, the Colorado River flows, carving through time, a testament to nature's enduring power.</p>

        </div>

      </div>
      <div className='h-[5px] w-[90vw] bg-black m-auto ' data-aos="fade-up" data-aos-duration="1500"></div>

      <div className=' flex my-[5rem]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-serif font-semibold m-4  self-start' data-aos="fade-right" data-aos-duration="1500">Northern Lights </h1>
          <div className='h-[5px] w-[50%] mr-auto mx-4 bg-red-800 rounded-full' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="100" data-aos-delay="300"></div>
          <p className='text-xl font-semibold  font-serif mt-[3rem] m-4' data-aos="fade-up " data-aos-duration="1500" data-aos-delay="300"> 
The Northern Lights, a celestial ballet of vibrant hues, dance across Arctic skies, enchanting spectators with their ethereal beauty and cosmic wonder. Illuminating the darkness, they paint the night with shimmering ribbons of light, an awe-inspiring spectacle of nature's majesty.</p>

        </div>

        <img className='w-[50%] ml-auto m-4 ' src='wonders/Northern-Lights.jpeg' data-aos="fade-up" data-aos-duration="1500"></img>
      </div>
      <div className='h-[5px] w-[90vw] bg-black m-auto ' data-aos="fade-up" data-aos-duration="1500"></div>
      <div className=' flex my-[5rem]'>
        <img className='w-[50%] h-[50vh]  m-4 ' src='wonders/Mount-Everest.jpeg' data-aos="fade-up" data-aos-duration="1500"></img>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-serif font-semibold m-4  self-start' data-aos="fade-left" data-aos-duration="1500">Mount Everest</h1>
          <div className='h-[5px] w-[50%] mr-auto mx-4 bg-red-800 rounded-full' data-aos="fade-left" data-aos-duration="1500" data-aos-offset="100" data-aos-delay="300"></div>
          <p className='text-xl font-semibold  font-serif mt-[3rem] m-4' data-aos="fade-up " data-aos-duration="1500" data-aos-delay="300"> Mount Everest, the pinnacle of Earth's majesty, rises defiantly against the sky, beckoning adventurers to conquer its towering heights and glimpse the world from its summit. Guarding the secrets of millennia, its snow-capped peak stands as a symbol of human ambition and the indomitable spirit of exploration</p>

        </div>

      </div>





     {/*  <div className='relative '>
        
        <div className='text-[8rem] font-serif font-bold text-white absolute top-[20%]  z-[2]' data-aos="fade-right" data-aos-duration="1500"> Niagara Falls </div>
        <div className='text-[2rem] font-serif font-bold text-white absolute top-[40%]
          w-[50%] right-0 z-[2]' data-aos="fade-left" data-aos-duration="1500"> Niagara Falls: where majestic cascades adorn the border, weaving a tale of natural wonder between Canada and the United States, captivating millions with its breathtaking allure and providing hydroelectric power to both nations.</div>
        <div className='absolute top-0 h-full w-full bg-black opacity-[0.5] z-[1]'></div>
      </div>

      <div className='relative '>
        <img className='w-[100vw]' src={'wonders/Northern-Lights.jpeg'}></img>
        <div className='text-[8rem] font-serif font-bold text-white absolute top-[20%]  z-[2]' data-aos="fade-right" data-aos-duration="1500">Northern Lights </div>
        <div className='text-[2rem] font-serif font-bold text-white absolute top-[40%]  w-[50%] right-0 z-[2]' data-aos="fade-left" data-aos-duration="1500"> Niagara Falls: where majestic cascades adorn the border, weaving a tale of natural wonder between Canada and the United States, captivating millions with its breathtaking allure and providing hydroelectric power to both nations.</div>
        <div className='absolute top-0 h-full w-full bg-black opacity-[0.5] z-[1]'></div>
      </div>
      <div className='relative'>
        <img className='w-[100vw]' src={'wonders/Northern-Lights.jpeg'}></img>
        <div className='absolute top-0 text-white font-bold  text-8xl'> Northern Lights </div>
      </div>
      <div>
      <img className='w-[100vw]' src={'wonders/Grand-Canyon.jpeg'}></img>
      </div> */}
    </>
  )
}
