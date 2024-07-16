"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NewDropDown from './NewDropDown';
import Script from 'next/script';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const items = ["Login", "Register", "About", "AdminPage"];
  const newsItems = ["news", "our-news"];
  const [user, setUser] = useState(null);
  const [selected, setSelected] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push('/login');
  };

  useEffect(() => {
    setSelected(router.pathname); // Set the selected state based on the current path
  }, [router.pathname]);

  return (
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>
      <nav className='w-full absolute z-40 h-20 bg-gradient-to-r from-green-600 to-green-800 shadow-lg flex justify-between items-center text-white font-serif px-10'>
        <div className='flex items-center'>
          <Link href={'/'} className='flex items-center'>
              <img src='/svgs/NatureSavior.gif' alt='Nature Savior Logo' className='pb-4' width={50} />
              <span className={`ml-2 text-2xl font-bold ${selected === "/" ? 'border-b-2 border-green-300' : ''}`}>
                Nature Saviors
              </span>
          </Link>
        </div>
        <ul className='flex gap-8 text-xl font-medium'>
          <li className={`transition-all ${selected === "/news" ? 'border-b-2 border-green-300' : ''}`}>
            <Link href="/news" onClick={() => setSelected("/news")}>News
            </Link>
          </li>
          <li className={`transition-all ${selected === "/wonders" ? 'border-b-2 border-green-300' : ''}`}>
            <Link href="/wonders" onClick={() => setSelected("/wonders")}>Wonders
            </Link>
          </li>
          <li className={`transition-all ${selected === "/about" ? 'border-b-2 border-green-300' : ''}`}>
            <Link href="/createmeetup" onClick={() => setSelected("/createmeetup")}>Meet-Ups
            </Link>
          </li>
          <li className={`transition-all ${selected === "/donations" ? 'border-b-2 border-green-300' : ''}`}>
            <Link href="/donations" onClick={() => setSelected("/donations")}>Donations
            </Link>
          </li>
          <li className={`transition-all ${selected === "/about" ? 'border-b-2 border-green-300' : ''}`}>
            <Link href="/about" onClick={() => setSelected("/about")}>About
            </Link>
          </li>
        </ul>
        <div className='flex items-center'>
          {user ? (
            <button onClick={handleLogout} className='mr-4 px-4 py-2 text-xl text-white hover:bg-white hover:text-green-900 transition-colors'>
              Logout
            </button>
          ) : null}
          <NewDropDown buttonText={user ? `Welcome ${user}` : "Profile"} />
        </div>
      </nav>
    </>
  )
}