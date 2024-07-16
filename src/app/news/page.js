'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MostPopular ,WaterPollution, AirPollution, SoilPollution, NaturalDisasters, HumanMadeDisasters, SpacePollution } from '@/utils/newsData'
export default function Page() {
  const [loading, setLoading] = useState(true);
  const [waterArticles, setWaterArticles] = useState(WaterPollution);
  const [airArticles, setAirArticles] = useState(AirPollution);
  const [soilArticles, setSoilArticles] = useState(SoilPollution);
  const [naturalDisasterArticles, setNaturalDisasterArticles] = useState(NaturalDisasters);
  const [humanMadeDisasterArticles, setHumanMadeDisasterArticles] = useState(HumanMadeDisasters);
  const [spacePollutionArticles, setSpacePollutionArticles] = useState(SpacePollution);
  const [MostPopularArticles, setMostPopularArticles] = useState(MostPopular)
  const router = useRouter();

  console.log(soilArticles)


  const handleClick = (item) => {
    window.open(item.link, '_blank'); // Open the article URL in a new tab
  };

  const renderArticles = (articles, title) => (
    <>
      <h1 className='text-center font-serif text-4xl font-bold text-green-900 mt-32'>{title}</h1>
      <section className='m-12 flex justify-center'>
        <div className='grid grid-cols-3 gap-4'>
          {articles && articles.length > 0 ? (
            articles.map((item, index) => (
              <div
                onClick={() => handleClick(item)}
                key={index}
                className='news-card w-80 border overflow-hidden border-black relative cursor-pointer transform transition-transform '
              >
                <img
                  className='w-full h-48 object-cover'
                  src={item.image}
                  alt={item.title}
                />
                <div className='p-4'>
                  <div className='font-serif font-bold text-xl text-green-900'>{item.title.slice(0, 50)}...</div>
                  <div className='font-serif font-medium text-base mt-2 text-gray-700'>{item.description ? item.description.slice(0, 100) : 'No description available.'}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-700 mt-8">No articles available</div>
          )}
        </div>
      </section>
    </>
  );

  return (
    <div className='mt-24'>
      <ToastContainer />
      {renderArticles(MostPopular, "Most Popular")}
      {renderArticles(naturalDisasterArticles, "Natural Disasters")}
      {renderArticles(humanMadeDisasterArticles, "Human-Made Disasters")}
      {renderArticles(airArticles, "Air Pollution Incidents")}
      {renderArticles(waterArticles, "Water Pollution Incidents")}
      {renderArticles(soilArticles, "Soil Pollution Incidents")}
      {renderArticles(spacePollutionArticles, "Space Pollution Incidents")}
    </div>
  );
}
