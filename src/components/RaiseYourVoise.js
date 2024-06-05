"use client"
import React, { useState, useRef } from 'react';

import { ToastContainer, toast,Bounce } from 'react-toastify';
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
            if (description.length < 300) {
                toast.error('atleat 100 words required ', {
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
                body: JSON.stringify({ user ,description, image  }) // Include the user in the payload
            });

            const data = await response.json();
            console.log(data);
            // console.log('Issue reported successfully:', data);
            if (data.message === "registered") {
                toast.success('Issue Raised Successfully', {
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
       
        <div className='h-[70vh] diagonal-split font-serif'>
            <div className='p-[30px]'>
                <h2 className='font-semibold text-2xl font-serif text-center'>Raise Your Voice</h2>
                <div className='text-center italic'>Report an issue ...</div>
                <div>
                    <form ref={formRef} className='form flex flex-col'>
                        <label className='font-serif font-medium text-xl' htmlFor='description'>
                            Type Your Issue here in few lines:
                            <span className='text-red-700'> *</span>
                        </label>
                        <textarea
                            className='mt-[1rem] p-3 font-serif border rounded-lg focus:border-[3px] focus:outline-none focus:border-green-700 border-black'
                            name='description'
                            rows={10}
                            cols={40}
                            value={description}
                            onChange={handleDescriptionChange}
                            placeholder='Description of issue ...'
                            required
                        />

                        <label className='font-serif font-medium text-xl mt-[1rem]' htmlFor='photos'>
                            Upload any files regarding the issue:
                        </label>
                        <input
                            className='mt-[1rem]'
                            type='file'
                            placeholder='upload'
                            name='photos'
                            onChange={handleImageChange}
                        />

                        <button
                            type="button"
                            className='p-2 border border-black w-[5%] mt-[1rem] rounded-md bg-green-700 font-semibold text-white font-serif'
                            onClick={handleSubmit}
                        >
                            Report
                        </button>
                    </form>
                </div>
            </div>
            </div>
            </>
    );
}
