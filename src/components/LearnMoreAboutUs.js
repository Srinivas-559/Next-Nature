import React from 'react'

const LearnMoreAboutUs = () => {
    return (
        <>
             <div className='my-5 mb-10'>
          <h1 className='font-bold text-2xl  my-5 font-serif text-center  '>Know more about us </h1>
          <div className=' flex justify-center items-center gap-[150px]'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/m5ASdVAcUqI?si=TUascX6540Fn9dm7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <div className='w-1/3 font-serif '>
                        <h1 className='text-xl my-3 font-semibold'>Importance of nature .</h1>
                        <p className='text-lg'>Discover the profound impact of nature on our lives and the planet. This video explores why preserving our natural environment is crucial for the well-being of all living beings. Join us in understanding the vital role nature plays in sustaining life and how we can contribute to its protection.</p>
                    </div>
          </div>
      </div>
      </>
     
  )
}

export default LearnMoreAboutUs