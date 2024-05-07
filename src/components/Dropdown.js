"use client"
import React, { useState } from 'react'
import DropDownContent from './DropDownContent';


export default function Dropdown({ buttonText, content }) {
    
    const [dropdownOn, setDropdownON] = useState(false);
    function handleClick() {
        setDropdownON(!dropdownOn);
    }
    return (
      <>
        <div>
        <button onClick={()=>{handleClick()}}>{buttonText}</button>

        </div>
        { dropdownOn && <div className=' absolute shadow-lg z-40 top-[5rem] bg-white text-black w-fit  min-w-[8rem] flex justify-center items-center p-2 px-4 font-normal'>

          <DropDownContent content={ content} />
        </div>}
        
      
      </>
  )
}
