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
            <h1 className='text-xl m-2 mt-5 text-center font-semibold'>Details </h1>
            <div className='w-[70%] mx-auto border border-black flex flex-col m-7 p-5 bg-gray-100 rounded-lg'>
                <div className='flex flex-col'>
                    <label htmlFor='name' className='text-lg mx-2'>Name :</label>
                    <input type='text' className='w-1/2 p-2 m-2 rounded-lg' name='name' value={paymentform.name} placeholder='Enter your name' onChange={handleChange}></input>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='message' className='text-lg mx-2'>Message :</label>
                    <input type='text' className='w-1/2 p-2 m-2 rounded-lg' name='message' value={paymentform.message} placeholder='Give a message' onChange={handleChange}></input>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='amount' className='text-lg mx-2'>Amount :</label>
                    <input type='text' className='w-1/2 p-2 m-2 rounded-lg' name='amount' value={paymentform.amount} placeholder='Enter amount' onChange={handleChange}></input>
                </div>
                <button className='w-1/2 p-2 mx-2 bg-black text-white rounded-lg hover:scale-105 transition-all ease-linear' onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}>Pay</button>
            </div>
        </>
    );
};

export default DonationForm;
