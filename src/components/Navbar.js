"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
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
    setUser(localStorage.getItem("user"));
  }, [localStorage.getItem("user")]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push('/login');
  }

  useEffect(() => {
    setSelected(router.pathname); // Set the selected state based on the current path
  }, [router.pathname]);

  return (
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>

      <div className='w-full absolute z-40 h-16  flex justify-between items-center  text-white font-serif'>
        <div className='font-bold text-2xl mx-10 '>
          <span className={selected === "/" ? 'border-b-[2px]  border-green-500' : ''}>
          <Link href={'/'} onClick={() => setSelected("/")} >
            <img width={50} src='/svgs/NatureSavior.gif'></img>
            </Link>
            </span>
        </div>
        <div>
          <ul className='flex gap-10 text-xl font-medium transition-all ease-linear'>
          <li className={selected === "/news" ? 'border-b-[2px]  border-green-500' : ''}>
              <Link href={"/news"} onClick={() => setSelected("/news")}>News</Link>
            </li>
            <li className={selected === "/wonders" ? 'border-b-2 border-green-500' : ''}>
              <Link href={"/wonders"} onClick={() => setSelected("/wonders")}>Wonders</Link>
            </li>
            <li className={selected === "/donations" ? 'border-b-2 border-green-500' : ''}>
              <Link href={"/donations"} onClick={() => setSelected("/donations")}>Donations</Link>
            </li>
            <li className={selected === "/about" ? 'border-b-2 border-green-500' : ''}>
              <Link href={"/about"} onClick={() => setSelected("/about")}>About</Link>
            </li>
          </ul>
        </div>
        <div className='mx-10'>
          {user ? <button onClick={handleLogout}>LogOut</button> : null}
          <NewDropDown buttonText={user ? `Welcome ${user}` : "Profile"} />
        </div>
      </div>
    </>
  )
}
