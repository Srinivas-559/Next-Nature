"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const NewDropDown = ({ buttonText}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const user = localStorage.getItem("user")
  const router = useRouter()
  const handleClick = () => {
    if (localStorage.getItem("user") !== null) {
      localStorage.removeItem("user");
      router.push("/login")
      console.log("Logged out ")
      
    } else {
      alert("please login");
    }
  }

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDelayButton"
        onMouseEnter={() => setIsDropdownVisible(true)}
        onMouseLeave={() => setIsDropdownVisible(false)}
        className="text-xl  relative text-white   hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium   px-5 py-2.5 text-center inline-flex items-center bg-transparent dark:focus:ring-green-800"
        type="button"
      >
              { buttonText}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      <div
        id="dropdownDelay"
        className={`absolute -left-[3rem]  z-10 bg-white divide-y divide-gray-100  shadow w-44 dark:bg-green-900 ${isDropdownVisible ? 'block' : 'hidden'} `}
        onMouseEnter={() => setIsDropdownVisible(true)}
        onMouseLeave={() => setIsDropdownVisible(false)}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
          <li>
            <Link href={"/login"} className="block px-4 py-2 hover:bg-green-900 hover:text-white dark:hover:bg-white dark:hover:text-green-900">Login</Link>
          </li>
          <li>
            <Link href={"/register"} className="block px-4 py-2 hover:bg-green-900 hover:text-white dark:hover:bg-white dark:hover:text-green-900">SignUP</Link>
          </li>
          <li>
            <Link href={`/${user}`} className="block px-4 py-2 hover:bg-green-900 hover:text-white dark:hover:bg-white dark:hover:text-green-900">Your Profile</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default NewDropDown;
