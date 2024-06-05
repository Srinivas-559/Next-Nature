"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function page() {
  const [loading ,setLoading ] = useState(true)
  const router = useRouter();
  
  if (localStorage.getItem("user") === null) {
    
   
    router.push("/login");
    
    
  }
  const handleClick = (item) => {
    window.open(item.url, '_blank');  // Open the article URL in a new tab
  };
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    // const response = await fetch(``);
    const response = await fetch(`${process.env.NEXT_PUBLIC_NEWSAPI_URL}`);
    const data = await response.json();

    setArticles(data.articles);
    setLoading(false);
   

  }
  useEffect(() => {

    getArticles();
    
  }, [])
  console.log(articles)
  

  return (
    <div className='absolute top-[65px] border border-black bg-white  h-[100vh] w-[100vw] overflow-scroll'>
      <h1 className='text-center font-serif text-2xl font-bold text-green-900 mt-[1rem]'>Most Popular </h1>
      
      {loading ? (
        // Loader while fetching articles
        <div className="flex justify-center items-center h-full">
          <div className="loader">
            <img className='w-[300px]' src='/svgs/turkey.gif'></img>
          </div>
        </div>
      ) : (
        <section className='mt-[1rem]'>
          <div className='flex flex-wrap container m-auto gap-1'>
            {articles.map((item) => (
              <div onClick={() => handleClick(item)} key={item.title} className='news-card w-[31rem] h-[25rem] border rounded-xl overflow-hidden border-black relative'>
                <img className='w-full h-full object-cover' src={item.urlToImage ? item.urlToImage : '/pics/Sustainable-practices.jpeg'} alt={item.title} />
                <div className='bg-black absolute w-full h-full z-1 top-0 opacity-[0.5]'></div>
                <div className='news-description absolute top-[50%] z-[2] text-white p-3'>
                  <div className='font-serif font-bold text-2xl'>{item.title}</div>
                  <div className='font-serif font-medium text-lg mt-[1rem]'>{item.description ? item.description.slice(0, 50) : 'No description'}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}