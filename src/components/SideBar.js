import React from 'react'
import Link from 'next/link'

export default function SideBar() {
  return (
    <>
      <div className=' h-[100vh] w-[15vw] mx-5 mt-10'>
      
        <ul className='categories  font-serif flex flex-col gap-7 '>
          <li><h1 className='text-3xl font-bold'>Categories </h1></li>

          <li className='text-xl font-semibold'><Link href={'/home/raise'}>Raise Your Voice</Link> </li>
          <li className='text-xl font-semibold'><Link href={'/home/sufferings'}>Stories of Sufferings</Link></li>
          <li className='text-xl font-semibold'><Link href={'/home/ourwork'}>Our Work</Link></li>
          <li className='text-xl font-semibold'><Link href={'/home/magzines'}>Magzines</Link></li>


        </ul>



      </div>
          
          
    </>
  )
}
