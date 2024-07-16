"use client"
import React, { useState, useEffect } from 'react';
import { fetchpayments } from '@/actions/useractions';

const YourDonations = () => {
    const username = localStorage.getItem("user");
    const [payments, setPayments] = useState([]);

    const getPayments = async () => {
        const dbpayments = await fetchpayments(username);
        setPayments(dbpayments);
    };

    useEffect(() => {
        getPayments();
    }, []);

    console.log(payments);

    return (
        <>
            <div className='flex flex-col items-center gap-5 m-5'>
                <h1 className='text-3xl font-bold text-center text-green-700 mb-8'>Your Donations</h1>

                {/* Sample donation card */}
                <div className='border border-black w-full max-w-3xl flex items-center  bg-red-50 p-4 -md'>
                    <img src='/svgs/account.png' alt='Account' className='w-16 h-16 mr-4' />
                    <div>
                        <ul className='space-y-1'>
                            <li className='text-lg'><strong>Amount:</strong> Rs 100</li>
                            <li className='text-lg'><strong>Message:</strong> I hope my contribution can make a difference.</li>
                            <li className='text-lg'><strong>Status:</strong> <span className='text-red-500'>Failed ❌</span></li>
                        </ul>
                    </div>
                </div>

                {/* User donations */}
                {payments.map((payment, index) => (
                    <div key={index} className='border border-black w-full max-w-3xl flex items-center bg-green-50 p-4 -md'>
                        <img src='/svgs/account.png' alt='Account' className='w-16 h-16 mr-4' />
                        <div>
                            <ul className='space-y-1'>
                                <li className='text-lg'><strong>Amount:</strong> Rs {payment.amount}</li>
                                <li className='text-lg'><strong>Message:</strong> {payment.message}</li>
                                <li className='text-lg'><strong>Status:</strong> {payment.done ? <span className='text-green-500'>Success ✅</span> : <span className='text-red-500'>Failed ❌</span>}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default YourDonations;