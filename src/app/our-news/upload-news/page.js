"use client"
import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function page() {

    const [authorname, setAuthorname] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [articleImage, setArticleImage] = useState(""); 
    const validateFormData = () => {
    // Custom checks for each field
    if (!authorname || !title || !date || !category || !articleImage || !description) {
        alert('Please fill in all fields');
        return false;
      }
  
      if (description.length < 100) {
        alert('Description must be at least 100 characters long');
        return false ;
      }
        return true;
    }

    const submitFormData = async () => {
      try {
        const response = await axios.post('/api/articles', {
          authorname,
          title,
          date,
          category,
          articleImage,
          description
        });
  
        // console.log('News article uploaded successfully:', response.data);
      } catch (error) {
        console.log(error);
        // console.error('Error uploading news article:', error.response.data);
      }
    };
  

    



    return (
      <div className='absolute z-[2] top-[5rem] w-full h-full border border-white  flex justify-center items-center  '>
           
          <div className='w-[80%] h-fit bg-white m-auto flex flex-col items-center justify-center gap-4 rounded-lg shadow-lg shadow-black p-[2rem]'>
              <h1 className='text-xl font-bold font-serif text-center mt-[1rem] '>Upload News ...</h1>

              <div className='flex flex-col'>
                  <label className='font-medium font-serif text-lg' htmlFor='authorname'>Author Name :</label>
                    <input className='font-serif border border-black p-2 w-[30rem] rounded-md' name="authorname" type='text' placeholder='Enter Your name or author name' onChange={(e) => {setAuthorname(e.target.value)}}></input>
              </div>
              <div className='flex flex-col'>
                  <label className='font-medium font-serif text-lg'  htmlFor='title'>Title :</label>
                  <input className='font-serif border border-black p-2 w-[30rem] rounded-md' name="title" type='text' placeholder='Enter the title of the article' onChange={(e) => {setTitle(e.target.value)}}></input>
              </div>
              <div className='flex flex-col'>
                  <label className='font-medium font-serif text-lg'  htmlFor='date'>Date :</label>
                  <input className='border border-black p-2 w-[30rem] rounded-md' name='date' type='date' placeholder='Enter the date of the incident happened' onChange={(e) => {setDate(e.target.value)}}></input>
              </div>
              <div className='flex flex-col'>
                  <label className='font-medium font-serif text-lg'  htmlFor= 'category'> Category :</label>
                  <input className='font-serif border border-black p-2 w-[30rem] rounded-md' name='category' type='text' placeholder='category' onChange={(e) => {setCategory(e.target.value)}}></input>
              </div >
              <div className='flex flex-col'>
                  <label className='font-medium font-serif text-lg'  htmlFor= 'articleimage'>Image URL : </label>
                  <input  className='font-serif border border-black p-2 w-[30rem] rounded-md' name='articleimage' type='text' placeholder='Enter the URL of the Image ' onChange={(e) => {setArticleImage(e.target.value)}}></input>
              </div>
              <div className='flex flex-col'>
                  <label className='font-medium font-serif text-lg'  htmlFor='description'> Description :</label>
                  <textarea className='font-serif border border-black w-[40rem]' name='description' rows={10} cols={10} placeholder='Description of the Article (minimum 100 characters )' onChange={(e) => {setDescription(e.target.value)}}></textarea>
              </div>

              <div>
            <button className='border border-green-700 px-[3rem] py-[0.5rem] bg-green-700 text-white rounded-lg' onClick={() => {
              
              if (validateFormData()) {
                submitFormData()
              } else {
                alert("Invalid Credentials ")
              }
            }
            }> Submit </button>
              </div>

              
              
      </div>
          
          

          
    </div>
  )
}
