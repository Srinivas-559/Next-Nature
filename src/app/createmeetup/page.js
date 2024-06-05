"use client"
import { useState,useEffect } from 'react';
import axios from 'axios';
import { fetchuser } from '@/actions/useractions';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateMeetupForm = () => {



    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    
    const [participantLimit, setParticipantLimit] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [themePic, setThemePic] = useState('');
    const [address, setAddress] = useState('');
    const user = localStorage.getItem("user");
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        const fetchdbUser = async () => {
            const db = await fetchuser(user);
            setCurrentUser(db);
        }
            
        fetchdbUser();
        
    },[])


   

    const handleSubmit = async (e) => {


        e.preventDefault();

        // Convert the image file to a base64-encoded string
        const base64ThemePic = themePic ? await toBase64(themePic) : '';

        try {
            const response = await axios.post('http://localhost:3000/api/meetups', {
                user,
                title,
                address,
                description,
                email,
                contact,
                participantLimit: parseInt(participantLimit),
                date,
                time,
                themePic: base64ThemePic,
               
            
            });
            console.log(response.data.message)
            if (response.data.message === "success") {
                toast.success('Meetup Created  ', {
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
            

            // Reset form fields after submission
            setTitle('');
            setDescription('');
            setContact('');
            setEmail('');
            setParticipantLimit('');
            setDate('');
            setTime('');
            setThemePic('');
            setAddress('');





        } catch (error) {
            console.error('Error creating meetup:', error);
        }
    };

    // Helper function to convert a file to a base64-encoded string
    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    
    return (
        <>
            <ToastContainer />
            <div className='absolute top-[65px] bg-white w-[100vw] h-[90vh] overflow-scroll flex justify-center items-center font-serif'>
                <div className='border shadow-lg shadow-green-800 flex  justify-center items-center   h-[80vh] max-w-[80vw]'>

                    <div className='bg-green-800 text-white font-serif w-1/2 h-full '>
                        <div className='text-9xl flex justify-center items-center w-full h-full  '><span className='mx-20 '>Create MeetUP</span>  </div>
                    </div>

                    <div className='form-container w-1/2 bg-gray-100 h-full '>

                        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-[100px]">
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="border p-2 w-full mb-2 rounded outline-none focus:border-2 focus:border-green-700 "
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                className="border p-2 w-full mb-2 rounded outline-none focus:border-2 focus:border-green-700"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="border p-2 w-full mb-2 rounded outline-none focus:border-2 focus:border-green-700"
                            />
                            <input
                                type="text"
                                placeholder="Contact Number"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                                className="border p-2 w-full mb-2 rounded outline-none focus:border-2 focus:border-green-700"
                            />

                            <input
                                type="number"
                                placeholder="Participant Limit"
                                value={participantLimit}
                                onChange={(e) => setParticipantLimit(e.target.value)}
                                required
                                className="border p-2 w-full mb-2 rounded outline-none focus:border-2 focus:border-green-700"
                            />
                            <input
                                type="date"
                                placeholder="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                                className="border p-2 w-full mb-2 rounded outline-none focus:border-2 focus:border-green-700"
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                className="border p-2 w-full mb-2 rounded outline-none focus:border-2 focus:border-green-700"
                            />
                            <input
                                type="time"
                                placeholder="Time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                                className="border p-2 w-full mb-2 rounded outline-none focus:border-2 focus:border-green-700"
                            />
                            <input
                                type="file"
                                onChange={(e) => setThemePic(e.target.files[0])}
                                className="border p-2 w-full mb-2 rounded"
                            />
                            <button type="submit" className=" w-full text-white bg-green-800 px-4 py-2 rounded-lg hover:scale-105 transition-all ease-linear">
                                Create Meetup
                            </button>
                        </form>

                    </div>


                </div>

            </div>
        </>

    );
};

export default CreateMeetupForm;
