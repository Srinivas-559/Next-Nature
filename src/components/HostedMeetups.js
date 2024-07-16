import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HostedMeetups = () => {
    const [meetups, setMeetups] = useState([]);
    const [error, setError] = useState('');
    const user = localStorage.getItem("user");

    useEffect(() => {
        const fetchCreatedMeetups = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/created-meetups', {
                    headers: { user }
                });
                setMeetups(response.data);
            } catch (error) {
                console.error('Error fetching created meetups:', error);
                setError('Error fetching created meetups');
            }
        };

        fetchCreatedMeetups();
    }, [user]);

    const cancelMeetup = async (id) => {
        try {
            await axios.delete('http://localhost:3000/api/created-meetups', { data: { id, user } });
            setMeetups(meetups.filter(meetup => meetup._id !== id));
        } catch (error) {
            console.error('Error canceling meetup:', error);
            setError('Error canceling meetup');
        }
    };

    return (
        <div className='font-serif'>
            <h1 className='text-xl font-bold text-center mt-5'>Your Meetups</h1>

            <div className='meetup-cards flex flex-wrap justify-center'>
                {error && <p className="text-red-500">{error}</p>}
                {meetups.length === 0 &&
                    <div className='flex flex-col h-20vh w-full justify-center items-center'>
                        <p className='text-sm text-red-600'>No meetings hosted yet.</p>
                        <p>No meetings found.</p>
                    </div>
                }
                {meetups.map((meetup) => (
                    <div key={meetup._id} className='meetup-card border border-black m-5  min-w-[400px] max-w-[500px] hover:scale-[1.05] transition-all ease-linear overflow-hidden'>
                        <div className='overflow-hidden h-200px w-full'>
                            <img className='' src={meetup.themePic} alt='Meetup Theme'></img>
                        </div>
                        <div className='p-3'>
                            <div className='flex items-center'>
                                <img src='/svgs/location.png' width={30} alt='Location'></img>
                                <h2 className='ml-2'>{meetup.address}</h2>
                            </div>
                            <div className='contact mt-2'>
                                <h2>Title: <span className='font-bold'>{meetup.title}</span></h2>
                                <h2>Host Name: <span className='font-bold'>{meetup.user}</span></h2>
                                <h2>Phone: <span className='font-bold'>{meetup.contact}</span></h2>
                                <h2>Email: <span className='font-bold'>{meetup.email}</span></h2>
                            </div>
                            <div className='mt-2'>
                                <h1>Purpose:</h1>
                                <p className='italic'>{meetup.description}</p>
                            </div>
                            <div className='flex justify-end mt-3'>
                                <button className='mx-2 bg-red-400 rounded-md py-1 px-3 hover:scale-[1.1] transition-all ease-linear'
                                    onClick={() => cancelMeetup(meetup._id)}>Cancel Meetup</button>
                            </div>
                            <span className='absolute bottom-2 left-3 flex text-gray-500'>
                                <img src='/svgs/participants.png' width={27} alt='Participants'></img>
                                {meetup.participants.length}/{meetup.participantLimit}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HostedMeetups;