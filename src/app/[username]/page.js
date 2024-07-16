"use client";
import HostedMeetups from '@/components/HostedMeetups';
import YourMeetups from '@/components/YourMeetups';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = ({ params }) => {
    const user = localStorage.getItem("user");
    const [issues, setIssues] = useState([]);

    const getIssues = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/issues/${user}`);
            setIssues(response.data);
        } catch (error) {
            console.error("Error fetching issues:", error);
            // Handle error fetching data
        }
    };

    const deleteIssue = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/issues/${id}`);
            if (response.status === 200) {
                toast.success('Issue deleted', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                getIssues();
            } else {
                toast.error('Failed to delete issue', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error("Error deleting issue:", error);
            toast.error('Failed to delete issue', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    useEffect(() => {
        getIssues();
    }, []);

    return (
        <>
            <ToastContainer />
            <div className='absolute top-16 border border-black w-full h-full bg-white overflow-scroll'>
                <div className="cover-image relative">
                    <img className='w-full h-[50vh]' src={'Nature-Home.jpeg'} alt='Cover'></img>
                </div>
                <div className='absolute top-[40%] right-[45%] w-[10%]  overflow-hidden'>
                    <img className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIopYjBX7ncFWxQyFaLCocqAEDty7krUMTqA&s" alt='Profile'></img>
                </div>
                <div className='Your-Info text-center mt-[100px]'>
                    <h1 className='font-bold text-3xl'> Welcome! {localStorage.getItem("user")}</h1>
                    <span className='m-3 text-gray-500'>• {issues.length} issues</span><span className='m-3 text-gray-500'>• 2 meetups</span>
                </div>
                <div className='flex w-full font-serif mt-10'>
                    <div className='border border-gray-500 rounded-lg w-1/2 mx-5 h-[75vh]  overflow-scroll'>
                        <h1 className='font-bold text-xl text-center mt-5'>Issues</h1>
                        {
                            issues.length === 0 ? (
                                <div className='text-red-500 text-sm text-center'>You haven't raised any issues yet!</div>
                            ) : (
                                issues.map((item) => (
                                    <div key={item._id} className='m-5 Issue-card border border-black rounded-lg p-3'>
                                        <h2 className='text-xl font-bold'>Issue</h2>
                                        <div className='flex justify-center items-center'>
                                            <img className='mx-2 rounded-lg' src={item.image} width={150} alt='Image'></img>
                                            <div>
                                                <div className='description font-medium'>{item.description}</div>
                                                <div className='buttons flex justify-end'>
                                                    <button className='mx-2 bg-green-400 rounded-md py-1 px-3 hover:scale-[1.1] transition-all ease-linear'
                                                        onClick={() => deleteIssue(item._id)}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <div className='border border-black rounded-lg w-1/2 mr-5 h-[75vh] '>
                        <HostedMeetups />
                    </div>
                </div>
                <div className='border border-black rounded-2xl bg-green-50 shadow-lg m-5'>
                    <YourMeetups />
                </div>
            </div>
        </>
    );
};

export default Page;