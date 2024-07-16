"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import meetup from '@/models/meetup';

const Page = () => {
  const [meetups, setMeetups] = useState([]);
  const [error, setError] = useState('');
  const user = localStorage.getItem("user");
  const router = useRouter();
console.log(meetups)
  useEffect(() => {
    const fetchMeetups = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/meetups');
        const allMeetups = response.data;
        console.log(response)
        const filteredMeetups = allMeetups.filter(meetup => meetup.user !== user);
        setMeetups(filteredMeetups);
      } catch (error) {
        console.error('Error fetching meetups:', error);
        setError('Error fetching meetups');
      }
    };

    fetchMeetups();
  }, [user]);

  const joinMeetup = async (id) => {
    try {
      const response = await axios.patch('http://localhost:3000/api/meetups', { id, user });
      const updatedMeetup = response.data;
      setMeetups(meetups.map(meetup => meetup._id === id ? updatedMeetup : meetup));
      if (response.data.participants.includes(user)) {
        toast.success('Joined meetup', {
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
      <div className="font-serif mt-16">
        <div className="pb-12 flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-400 to-green-900 text-white p-4">
          <div className="flex flex-col">
            <div className="text-4xl md:text-6xl mt-12">Community Meetups</div>
            <span className="text-lg md:text-xl mt-4">Join our communities to contribute more.</span>
            <div className="buttons text-center mt-8 flex flex-col sm:flex-row gap-5 justify-center">
              <button className="border px-5 py-2 bg-white text-black  transition-all ease-linear">All Meetups</button>
              <button className="border bg-white text-black hover:bg-green-900 hover:text-white px-5 py-2  transition-all ease-linear" onClick={() => router.push('/createmeetup')}>Create One</button>
            </div>
          </div>
        </div>

        <div className="meetup-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center mt-10">
          {error && <p className="text-red-500">{error}</p>}
          {meetups.map((meetup) => (
            <div key={meetup._id} className="meetup-card border relative border-gray-300 overflow-hidden shadow-lg">
              <div className="img-container h-[200px] overflow-hidden">
                <img className="w-full h-full object-cover" src={meetup.themePic} alt="Theme" />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <img src="/svgs/location.png" width={20} alt="Location" />
                  <h2 className="ml-2 text-lg font-semibold">{meetup.address}</h2>
                </div>
                <div className="contact mb-4">
                  <h2>Host: <span className="font-bold">{meetup.user}</span></h2>
                  <h2>Phone: <span className="font-bold">{meetup.contact}</span></h2>
                  <h2>Email: <span className="font-bold">{meetup.email}</span></h2>
                </div>
                <div>
                  <h1 className="font-bold mb-2">Purpose:</h1>
                  <span className="italic">{meetup.description}</span>
                </div>
                <div className="flex justify-end mt-4">
                  {meetup.participants.length < meetup.participantLimit && !meetup.participants.includes(user) ? (
                    <button className="mx-2 bg-green-500 text-white py-1 px-3  transition-all ease-linear" onClick={() => { joinMeetup(meetup._id) }}>Join Meetup</button>
                  ) : (
                    meetup.participants.includes(user) ? 
                      <button className="mx-2 bg-red-500 text-white py-1 px-3  transition-all ease-linear" onClick={() => { leaveMeetup(meetup._id) }}>Leave Meetup</button> 
                      : 
                      <p className="text-sm text-red-600">Limit reached</p>
                  )}
                </div>
                <span className="absolute bottom-2 left-3 flex text-gray-500">
                  <img src="/svgs/participants.png" width={27} alt="Participants" />{meetup.participants.length}/{meetup.participantLimit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Page;