import React, { useState, useEffect} from 'react'
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

    console.log(meetups);
    return (
      
        
        <div className='font-serif '>
            <h1 className='text-xl font-serif font-bold  text-center mt-5 '>Your Meetups</h1>
            
            <div className='meetup cards flex flex-nowrap
             overflow-scroll justify-center items-center   '>

                {error && <p className="text-red-500">{error}</p>}
                {meetups.length === 0 &&<div className='flex flex-col h-[20vh] w-[100%] justify-center items-center   '>
                    <div className='text-gray-500 text-5xl  w-full h-full flex flex-col justify-center items-center '> 
                    <p className='text-sm text-red-600'>No Meeting Hosted Yet .</p>
                        <div>No Meetings Found .</div>
                    </div>
                    
                    </div>
                   }
{
  meetups.map((meetup) => (
    <div key={meetup._id} className='meetup-card border relative border-black  m-5 rounded-lg  min-w-[400px] min-h-[500px]  hover:scale-[1.05] transition-all ease-linear overflow-hidden '>
      <div className='overflow-hidden h-[200px] w-[100%] object-contain'><img className=' ' src={meetup.themePic}></img></div>
    <div className='p-3'>
        <span className='flex  items-center'><img src='/svgs/location.png ' width={30}></img><h2>{meetup.address}</h2></span>
              <div className='contact'>
                  <h2>Title <span className='font-bold'>{ meetup.title}</span> </h2>
            <h2>HostName:<span className='font-bold'> {meetup.user}</span></h2>
            <h2>Ph:<span className='font-bold'> {meetup.contact}</span></h2>
            <h2>Mail:<span className='font-bold'>{meetup.email}</span></h2>
        </div>
        <div className=''>
            <h1 >Purpose :</h1>
          <span className='italic'>{meetup.description }</span>
        </div>
        <div className='flex justify-end absolute bottom-2 right-3 '>
        <button className='mx-2 bg-green-400 rounded-md py-1 px-3 hover:scale-[1.1] transition-all ease-linear mt-3' onClick={() => { cancelMeetup(meetup._id) }}>Cancel Meetup</button>

        
        </div>
        <span className='absolute bottom-2 left-3 flex text-gray-500 ' ><img src='/svgs/participants.png' width={27} ></img>{ meetup.participants.length}/{meetup.participantLimit }</span>                 
</div>

</div>


  ) )
}

</div>
       



          
          


    </div>
  )
}

export default HostedMeetups