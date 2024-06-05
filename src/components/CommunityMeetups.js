import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateMeetupForm from './CreateMeetupForm';

const CommunityMeetup = ({ user }) => {
    const [meetups, setMeetups] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [error, setError] = useState(null);

    const getMeetups = async () => {
        try {
            const response = await axios.get('/api/meetups');
            setMeetups(response.data);
        } catch (error) {
            setError(error.message);
        }
    };

    const joinMeetup = async (meetupId) => {
        try {
            const response = await axios.post(`/api/meetups/${meetupId}/join`, { user });
            console.log(response.data);
            // Update the state to reflect the user joining the meetup
            setMeetups(meetups.map(meetup => meetup._id === meetupId ? response.data : meetup));
        } catch (error) {
            console.error('Error joining meetup:', error);
            setError(error.message);
        }
    };

    useEffect(() => {
        getMeetups();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Community Meetups</h1>
                <div>
                    <button 
                        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => setShowCreateForm(!showCreateForm)}
                    >
                        {showCreateForm ? 'All Meetups' : 'Create a Meetup'}
                    </button>
                </div>
            </div>
            {showCreateForm ? (
                <CreateMeetupForm />
            ) : (
                <div>
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {meetups.length === 0 ? (
                        <p>No meetups available.</p>
                    ) : (
                        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {meetups.map(meetup => (
                                <li key={meetup._id} className="border p-4 rounded-lg shadow-lg">
                                    {meetup.themePic && <img src={meetup.themePic} alt="Theme" className="mb-2 rounded" />}
                                    <h2 className="text-2xl font-bold mb-2">{meetup.title}</h2>
                                    <p className="mb-2">{meetup.description}</p>
                                    <p>Contact: {meetup.contact}</p>
                                    <p>Email: {meetup.email}</p>
                                    <p>Purpose: {meetup.purpose}</p>
                                    <p>Date: {meetup.date}</p>
                                    <p>Time: {meetup.time}</p>
                                    <p>Participants: {meetup.participants.length}/{meetup.participantLimit}</p>
                                    {meetup.participants.length < meetup.participantLimit && !meetup.participants.includes(user) && (
                                        <button 
                                            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                                            onClick={() => joinMeetup(meetup._id)}
                                        >
                                            Join
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default CommunityMeetup;
