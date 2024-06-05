"use client"
import React, { useState, useEffect } from 'react'
import { fetchpayments } from '@/actions/useractions'


const YourDonations = () => {
    const username = localStorage.getItem("user")
    const [payments, setPayments] = useState([]);
    const getPayments = async () => {
        const dbpayments = await fetchpayments(username);
        
        setPayments(dbpayments);
        // console.log(dbpayments)

        
    }
    useEffect(() => {
        getPayments();
    },[])
    console.log(payments)
    return (
      <>
            <div className='flex flex-col items-center gap-5 overflow-scroll m-5' ><h1 className='text-xl font-bold text-center  '>Your Donations  </h1>
            
        
                <div className='border border-black w-1/2 flex items-center rounded-lg bg-red-50'>
                <img src={'/svgs/account.png'} ></img>
                <div>
                    <ul>
                        <li>Amount  : Rs 100</li>
                        <li>Message : I hope my contribution can make a difference .</li>
                        <li>Status  : Failed </li>
                    </ul>
            </div>

            </div>
                

                {payments.map((payment) => {
                    return (
                        <div className='border border-black w-1/2 flex items-center rounded-lg bg-green-50'>
                        <img src={'/svgs/account.png'} ></img>
                        <div>
                            <ul>
                                <li>Amount  : Rs {payment.amount}</li>
                                <li>Message : {payment.message}</li>
                                <li>Status  : {payment.done ?  'success✅': 'failed ❌ '} </li>
                            </ul>
                        </div>

                    </div>
                    )
                } )}
           
            </div>
            
      </>
  )
}

export default YourDonations