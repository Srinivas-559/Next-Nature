"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function page() {

  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=82d02397471d44f5b0da460189514d68");
    const data = await response.json();

    setArticles(data.articles);
   

  }
  useEffect(() => {

    getArticles();
    
  }, [])
  console.log(articles)
  

  return (
    <div className='absolute top-[80px] border border-black bg-white  h-[100vh] w-[100vw] overflow-scroll'>
      <h1 className='text-center font-serif text-2xl font-bold text-green-900 mt-[1rem]'>Most Popular </h1>
      
      <section className="mt-[1rem]">
       

        <div className="flex flex-wrap container m-auto gap-1">
  {articles.map((item) => {
    return (
      <div key={item.title} className="news-card w-[31rem] h-[25rem] border border-black relative ">
        <img className="w-full h-full object-cover" src={'/pics/Sustainable-practices.jpeg'} alt={item.title} />
        <div className="bg-black absolute w-full h-full z-1 top-0 opacity-[0.5]"></div>
        <div className="news-description absolute top-[50%] z-[2] text-white p-3">
          <div className="font-serif font-bold text-2xl">{item.title}</div>
          <div className="font-serif font-medium text-lg mt-[1rem]">
            {item.description ? item.description.slice(0,50):"No description" }
          </div>
        </div>
      </div>
    );
  })}
</div>

        
      </section>
    </div>
  )
}