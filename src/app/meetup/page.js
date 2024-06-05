"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const page = () => {
  const [meetups, setMeetups] = useState([]);
  const [error, setError] = useState('');
  const user = localStorage.getItem("user");

  useEffect(() => {
      const fetchMeetups = async () => {
          try {
              const response = await axios.get('http://localhost:3000/api/meetups');
              const allMeetups = response.data;
              const filteredMeetups = allMeetups.filter(meetup => meetup.user !== user);
              setMeetups(filteredMeetups);
          } catch (error) {
              console.error('Error fetching meetups:', error);
              setError('Error fetching meetups');
          }
      };

      fetchMeetups();
  }, [user]);
  // console.log(meetups);

  const joinMeetup = async (id) => {
      try {
          const response = await axios.patch('http://localhost:3000/api/meetups', { id, user });
          const updatedMeetup = response.data;
          setMeetups(meetups.map(meetup => meetup._id === id ? updatedMeetup : meetup));
          if (response.data.participants.includes(user)) {
            toast.success('joined meetup', {
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
          console.error('Error joining meetup:', error);
          setError('Error joining meetup');
      }
  };

  const leaveMeetup = async (id) => {
      try {
          const response = await axios.delete('http://localhost:3000/api/meetups', { data: { id, user } });
          const updatedMeetup = response.data;
          setMeetups(meetups.map(meetup => meetup._id === id ? updatedMeetup : meetup));
          if (!response.data.participants.includes(user)) {
            toast.success('Left Meetup', {
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
          console.error('Error leaving meetup:', error);
          setError('Error leaving meetup');
      }
  };


  return (
      <>
            <ToastContainer />
   
    <div className='absolute top-[65px] font-serif  w-[100vw] h-[93vh] overflow-scroll  bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'>
      
      <div className=' flex justify-center items-center  text-center h-[60vh]  border  ' >
        <div className='flex flex-col '>
          <div className='text-6xl mt-[70px]' >Community Meetups</div>
          <span className='text-xl mt-4'>Join our communities to contribute more .</span>
          
          <div className='buttons text-center mt-[80px] flex gap-5 justify-center'><button className='border  px-5 py-2  bg-black text-white rounded-lg hover:scale-105 transition-all ease-linear'> All Meets </button>
        <Link href={'/createmeetup'} className='border bg-gray-100 text-black hover:bg-black hover:text-white px-5 py-2 rounded-lg hover:scale-105 transition-all ease-linear'> Create One  </Link></div>
        </div> 
        </div>

        <div className='meetup cards flex flex-wrap justify-center items-center  '>

          {error && <p className="text-red-500">{error}</p>}
          {meetups.map((meetup) => (
                <div key={meetup._id} className='meetup-card border relative border-black m-5 rounded-lg w-[400px] h-[500px] hover:scale-[1.05] transition-all ease-linear overflow-hidden'>
                    <div className='img-container h-[40%] overflow-hidden'>
                        <img className='w-full h-full object-cover' src={meetup.themePic} alt='Theme' />
                    </div>
                    <div className='p-3 h-[60%]'>
                        <span className='flex items-center'>
                            <img src='/svgs/location.png' width={30} alt='Location' />
                            <h2>{meetup.address}</h2>
                        </span>
                        <div className='contact'>
                            <h2>HostName:<span className='font-bold'> {meetup.user}</span></h2>
                            <h2>Ph:<span className='font-bold'> {meetup.contact}</span></h2>
                            <h2>Mail:<span className='font-bold'>{meetup.email}</span></h2>
                        </div>
                        <div>
                            <h1>Purpose:</h1>
                            <span className='italic'>{meetup.description}</span>
                        </div>
                        <div className='flex justify-end absolute bottom-2 right-3'>
                            {meetup.participants.length < meetup.participantLimit && !meetup.participants.includes(user) ? (
                                <button className='mx-2 bg-green-400 rounded-md py-1 px-3 hover:scale-[1.1] transition-all ease-linear mt-3' onClick={() => { joinMeetup(meetup._id) }}>Join Meetup</button>
                            ) : (
                                (meetup.participants.includes(user) ? <button className='mx-2 bg-green-400 rounded-md py-1 px-3 hover:scale-[1.1] transition-all ease-linear mt-3' onClick={() => { leaveMeetup(meetup._id) }}>Leave Meetup</button> : <p className='text-sm text-red-600'>Limit reached</p>)
                            )}
                        </div>
                        <span className='absolute bottom-2 left-3 flex text-gray-500'>
                            <img src='/svgs/participants.png' width={27} alt='Participants' />{meetup.participants.length}/{meetup.participantLimit}
                        </span>
                    </div>
                </div>
            ))}

        </div>
        


      
      </div>
      </>
  )
}

export default page