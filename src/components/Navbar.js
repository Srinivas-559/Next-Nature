import Link from 'next/link'
import React from 'react'
import Dropdown from './Dropdown'




export default function Navbar() {

  const items = [ "Login", "Register","About" ,"AdminPage"];
 const newsItems = ["news","our-news"]
  


  return (
    <div  className='absolute top-0 z-[40]'>
      <ul className='flex gap-[3rem] justify-center items-center font-bold  text-white text-xl font-serif h-[80px]  w-[100vw] top-0 '>
          <li className=''></li>
        {/* <li className='  rounded-full p-2 flex-shrink-0 flex justify-center items-center  '><Link href={"/"} ><span>Home</span></Link><span className='invert text-2xl'><img src={ '/svgs/down-arrow.svg'} /></span></li> */}
        <li className='  rounded-full p-2 flex-shrink-0 flex justify-center items-center   '><Link href={"/"}>Home</Link></li>
        <li className='rounded-full p-2 flex-shrink-0 flex justify-center items-center '><Link href={"/wonders"}>Wonders</Link></li>
        <li className=' rounded-full p-2 flex-shrink-0 flex justify-center items-center '><Dropdown buttonText={"News"} content={newsItems}/><span className='invert text-2xl'><img src={ '/svgs/down-arrow.svg'} /></span></li>
        <li className=' rounded-full p-2 flex-shrink-0 flex justify-center items-center '><Dropdown buttonText={"More"} content={items} /><span className='invert text-2xl'><img src={ '/svgs/down-arrow.svg'} /></span></li>
      </ul>
      {/* <DropDown/> */}

   
      
      

   
      </div>
  )
}
