"use client"
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { fetchpayments, initiate, fetchuser } from '@/actions/useractions';

const DonationForm = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [payments, setPayments] = useState([]);
    const [paymentform, setPaymentform] = useState({
        name: '',
        message: '',
        amount: ''
    });
    const username = localStorage.getItem("user");

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
    };

    const getData = async () => {
        let u = await fetchuser(username);
        setCurrentUser(u);
        let dbpayments = await fetchpayments(username);
        setPayments(dbpayments);
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(payments)

    const pay = async (amount) => {
        let a = await initiate(amount, paymentform);
        let orderId = a.id;
        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_ID,
            "amount": amount,
            "currency": "INR",
            "name": "Nature Saviors",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": paymentform.name || "Your Name",
                "email": "your.email@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
    };

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='flex justify-center items-center min-h-screen w-full z-[-50]'>
                <div className='w-full max-w-md bg-white p-6'>
                    <h1 className='text-3xl font-bold mb-6 text-center text-green-700'>Donate to Nature Saviors</h1>
                    <div className='flex flex-col mb-4 w-full pt-4'>
                        <label htmlFor='name' className='text-lg mb-2'>Name :</label>
                        <input 
                            type='text' 
                            className='p-3 border  focus:outline-none focus:border-green-500' 
                            name='name' 
                            value={paymentform.name} 
                            placeholder='Enter your name' 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor='message' className='text-lg mb-2'>Message :</label>
                        <input 
                            type='text' 
                            className='p-3 border  focus:outline-none focus:border-green-500' 
                            name='message' 
                            value={paymentform.message} 
                            placeholder='Give a message' 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor='amount' className='text-lg mb-2'>Amount :</label>
                        <input 
                            type='text' 
                            className='p-3 border  focus:outline-none focus:border-green-500' 
                            name='amount' 
                            value={paymentform.amount} 
                            placeholder='Enter amount' 
                            onChange={handleChange} 
                        />
                    </div>
                    <button 
                        className='w-full p-3 bg-green-700 text-white  hover:bg-green-800 transition-all ease-linear'
                        onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                    >
                        Pay
                    </button>
                </div>
            </div>
        </>
    );
};

export default DonationForm;