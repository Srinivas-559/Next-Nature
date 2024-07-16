"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import AOS from "aos"
import "aos/dist/aos.css"
import Navbar from '@/components/Navbar'
import RaiseYourVoise from '@/components/RaiseYourVoise'
import PopularMeets from '@/components/PopularMeets'
import LearnMoreAboutUs from '@/components/LearnMoreAboutUs'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Script from 'next/script'

function Page() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/login");
    }
    AOS.init();
  }, [router]);

  return (
    <>
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>

      <div className="h-[90vh] flex mt-20 px-6 flex-col md:flex-row bg-green-50">
        <div className='w-64 h-64 top-64 rounded-full bg-green-600 absolute blur-md'></div>
        <div className='w-48 h-48 top-24 right-24 rounded-full bg-green-300 absolute blur-md'></div>
        <div className='w-24 h-24 top-24 left-24 z-0 rounded-full bg-green-500 absolute blur-md'></div>
        <div className='w-12 h-12 bottom-24 right-24 z-0 rounded-full bg-green-800 absolute blur-md'></div>
        <div className="md:w-1/2 w-full flex justify-center items-center md:ml-24 px-12">
          <div className="w-full md:w-3/4 lg:w-full h-96 relative">
            <Image
              src={'/Nature-mountains.jpeg'}
              alt="mountains"
              layout="fill"
              objectFit="cover"
              className="rounded-t-full rounded-l-full"
            />
          </div>
        </div>
        <div className="z-[10] md:w-1/2 w-full px-6 py-6 flex flex-col justify-center items-center md:items-start">
          <p className="text-black font-serif text-5xl pb-6 text-center md:text-left">
            Nature Saviours
          </p>
          <p className="text-center md:text-left text-lg font-serif">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="px-4 py-3 border-2 border-black mt-8 hover:bg-black hover:text-white transition-colors">
            Get Started
          </button>
        </div>
      </div>

      <section className='w-full py-12 bg-gray-50'>
        <h1 className='font-serif font-semibold text-3xl text-green-800 text-center'>
          Our Work
        </h1>
        <div className='w-3/4 mt-8 mx-auto text-xl text-green-900 leading-8 text-center font-serif'>
          "At Nature Saviours, we tirelessly work towards the preservation of Earth's ecosystems. Through reforestation, wildlife protection, and marine conservation, we strive to ensure a sustainable future. Join us in our mission to protect and cherish our planet."
        </div>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-5 gap-12 mx-6 mt-12'>
            {[
              { title: 'Community Engagement', icon: 'https://cdn.lordicon.com/wzrwaorf.json', link: '/meetup' },
              { title: 'Sustainable Practices', icon: 'https://cdn.lordicon.com/qeemqlwz.json' },
              { title: 'Environmental Education', icon: 'https://cdn.lordicon.com/lenjvibx.json' },
              { title: 'Volunteer Opportunities', icon: 'https://cdn.lordicon.com/rfgxevig.json' },
              { title: 'Research & Innovation', icon: 'https://cdn.lordicon.com/suuelqth.json' },
            ].map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center gap-6 p-6 rounded-lg w-32'
              >
                <lord-icon
                  src={item.icon}
                  trigger="hover"
                  colors="primary:#121331,secondary:#109121"
                  style={{ width: '75px', height: '75px' }}
                ></lord-icon>
                <h1 className='font-medium text-md font-serif text-green-900 hover:underline'>
                  {item.link ? (
                    <Link href={item.link}>{item.title}</Link>
                  ) : (
                    item.title
                  )}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className='w-full h-[90vh]'>
        <RaiseYourVoise />
      </section>

      {/* <section className='mt-36'>
        <PopularMeets />
      </section> */}


      <section className='mt-52'>
        <LearnMoreAboutUs />
      </section>

      <Footer />
    </>
  );
}

export default Page;
