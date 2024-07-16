"use client"
import React from 'react'
import DonationForm from '@/components/DonationForm'
import YourDonations from '@/components/YourDonations'


const page = () => {
    return (
        <div className='mt-20 font-serif'>
            <div className='h-[60%] flex justify-center items-center bg-green-700 text-white py-12'>
                <div className='flex flex-col items-center gap-5'>
                    <h1 className='text-6xl font-bold'>Contribute to Our Work</h1>
                    <span className='text-xl italic'>"Support Our Mission: Your Donation Makes a Difference"</span>
                    <div className='buttons text-center mt-10 flex gap-5'>
                        <button
                            onClick={() => {
                                setShowDonations(!showDonations);
                                setShowDonateForm(false);
                            }}
                            className='border px-5 py-2 bg-white text-green-700  hover:scale-105 transition-all ease-linear'
                        >
                            Your Donations
                        </button>
                        <button
                            onClick={() => {
                                setShowDonateForm(!showDonateForm);
                                setShowDonations(false);
                            }}
                            className='border  text-green-700 hover:bg-green-900 text-white px-5 py-2  hover:scale-105 transition-all ease-linear'
                        >
                            Donate
                        </button>
                    </div>
                </div>
            </div>

            <section className=''>
                <DonationForm />
            </section>
            <section className='flex flex-col items-center justify-center'>
                <YourDonations />
            </section>
        </div>
    )
}

export default page