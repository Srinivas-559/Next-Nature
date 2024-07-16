"use client"
import React, { useState, useRef } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RaiseYourVoice() {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const formRef = useRef(null);

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = async () => {
        try {
            if (description.split(' ').length < 100) {
                toast.error('Please provide at least 100 words in your description.', {
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
            } else {
                const user = localStorage.getItem('user'); // Retrieve the user from localStorage

                const response = await fetch('/api/report-issue', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user, description, image }) // Include the user in the payload
                });

                const data = await response.json();
                console.log(data);
                if (data.message === "registered") {
                    toast.success('Issue Raised Successfully!', {
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
                
                // Clear the form fields
                setDescription('');
                setImage(null);
                formRef.current.reset(); // Clear file input
            }
        } catch (error) {
            console.error('Error reporting issue:', error);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className='h-[70vh] w-full diagonal-split font-serif bg-gradient-to-r from-green-50 to-green-200'>
                <div className='p-10 md:p-20'>
                    <h2 className='font-semibold text-5xl text-green-800 text-center mb-8'>Raise Your Voice</h2>
                    <p className='text-center italic text-lg mb-8 text-gray-700'>
                        We believe in the power of community voices. Your concerns matter. Report any issues you observe, and help us make a difference.
                    </p>
                    <form ref={formRef} className='flex flex-col items-center bg-white p-8 border-2 border-green-800 max-w-3xl mx-auto'>
                        <label className='font-serif text-2xl text-green-800 font-semibold mb-4' htmlFor='description'>
                            Describe the Issue:
                        </label>
                        <textarea
                            className='mt-2 p-4 font-serif border focus:border-[3px] focus:outline-none focus:border-green-700 border-black w-full h-48 resize-none '
                            name='description'
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder='Provide a detailed description of the issue...'
                            required
                        />
                        <label className='font-serif font-medium text-xl mt-6 mb-4' htmlFor='photos'>
                            Upload Supporting Files (optional):
                        </label>
                        <div>
                        <input
                            className='mt-2 mb-6 w-full'
                            type='file'
                            name='photos'
                            onChange={handleImageChange}
                        />
                        </div>
                        <button
                            type="button"
                            className='p-3 w-48 mt-4 bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors'
                            onClick={handleSubmit}
                        >
                            Submit Issue
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
