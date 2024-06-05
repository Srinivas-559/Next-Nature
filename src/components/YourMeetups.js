"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const YourMeetups = () => {


    const [meetups, setMeetups] = useState([]);
    const [error, setError] = useState('');
    const user = localStorage.getItem("user");

    useEffect(() => {
        const fetchJoinedMeetups = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/joined-meetups', {
                    headers: { user }
                });
                setMeetups(response.data);
            } catch (error) {
                console.error('Error fetching joined meetups:', error);
                setError('Error fetching joined meetups');
            }
        };

        fetchJoinedMeetups();
    }, [user]);


    const leaveMeetup = async (id) => {
        try {
            const response = await axios.delete('http://localhost:3000/api/meetups', { data: { id, user } });
            const updatedMeetup = response.data;
            setMeetups(meetups.map(meetup => meetup._id === id ? updatedMeetup : meetup));
        } catch (error) {
            console.error('Error leaving meetup:', error);
            setError('Error leaving meetup');
        }
    };



  return (
      <div className=' font-serif '>
          <h1 className='text-xl font-bold text-center mt-10 '> Meetups joined </h1>
          <div>
              
          <div className='meetup cards flex  flex-wrap justify-center items-center  '>

                  {error && <p className="text-red-500">{error}</p>}
                  {meetups.length ==0 && <div className='flex flex-col h-[20vh] w-[100%] justify-center items-center   '>
                    <p className='text-sm text-red-600'>No Meeting Hosted Yet .</p>
                    <div className='text-gray-500 text-5xl '> 
                        You haven't joined any meetings .
                    </div>
                    
                    </div> }
{
  meetups.map((meetup) => (
    <div key={meetup._id} className='meetup-card border relative border-black m-5 rounded-lg  w-[400px] min-h-[450px]  hover:scale-[1.05] transition-all ease-linear  '>
      <div className=''><img className='h-[50%] ' src={meetup.themePic}></img></div>
    <div className='p-3'>
        <span className='flex  items-center'><img src='/svgs/location.png ' width={30}></img><h2>{ meetup.address}</h2></span>
        <div className='contact'>
            <h2>HostName:<span className='font-bold'> {meetup.user}</span></h2>
            <h2>Ph:<span className='font-bold'> {meetup.contact}</span></h2>
            <h2>Mail:<span className='font-bold'>{meetup.email}</span></h2>
        </div>
        <div className=''>
            <h1 >Purpose :</h1>
          <span className='italic'>{meetup.description }</span>
        </div>
        <div className='flex justify-end absolute bottom-2 right-3 '>
        {meetup.participants.length < meetup.participantLimit && !meetup.participants.includes(user) ? (
                  <button className='mx-2 bg-green-400 rounded-md py-1 px-3 hover:scale-[1.1] transition-all ease-linear mt-3' onClick={() => { joinMeetup(meetup._id) }}>Join Meetup</button>
          ) : (
              (meetup.participants.includes(user) ? <button className='mx-2 bg-green-400 rounded-md py-1 px-3 hover:scale-[1.1] transition-all ease-linear mt-3' onClick={() => { leaveMeetup(meetup._id) }}>leave Meetup</button> : <p className='text-sm text-red-600'> limit reached</p> )
              
                  
                 
              )}
          
          
          
        
        
        </div>
        <span className='absolute bottom-2 left-3 flex text-gray-500 ' ><img src='/svgs/participants.png' width={27} ></img>{ meetup.participants.length}/{meetup.participantLimit }</span>                 
</div>

</div>


  ) )
}

</div>
              
          </div>
          
    </div>
  )
}

export default YourMeetups