"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchuser } from '@/actions/useractions';
import { ToastContainer, toast, Bounce } from 'react-toastify';
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
    };
    fetchdbUser();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      if (response.data.message === "success") {
        toast.success('Meetup Created', {
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
      <div className="flex justify-center items-center bg-white mt-24 mb-12 font-serif">
        <div className="flex flex-col md:flex-row   overflow-hidden max-w-4xl w-full">
          <div className="bg-green-800 text-white w-full md:w-1/2 flex justify-center items-center p-8">
            <div className="text-4xl md:text-6xl text-center">
              Create MeetUP
            </div>
          </div>
          <div className="form-container w-full md:w-1/2  p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="border p-2 w-full  outline-none focus:border-2 focus:border-green-700"
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="border p-2 w-full  outline-none focus:border-2 focus:border-green-700"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border p-2 w-full  outline-none focus:border-2 focus:border-green-700"
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="border p-2 w-full  outline-none focus:border-2 focus:border-green-700"
              />
              <input
                type="number"
                placeholder="Participant Limit"
                value={participantLimit}
                onChange={(e) => setParticipantLimit(e.target.value)}
                required
                className="border p-2 w-full  outline-none focus:border-2 focus:border-green-700"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="border p-2 w-full  outline-none focus:border-2 focus:border-green-700"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="border p-2 w-full  outline-none focus:border-2 focus:border-green-700"
              />
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="border p-2 w-full  outline-none focus:border-2 focus:border-green-700"
              />
              <input
                type="file"
                onChange={(e) => setThemePic(e.target.files[0])}
                className="border p-2 w-full "
              />
              <button type="submit" className="w-full text-white bg-green-800 py-2  hover:scale-105 transition-all ease-linear">
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