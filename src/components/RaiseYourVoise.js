import React from 'react'

export default function RaiseYourVoise() {
    return (<>

        <div className='h-[70vh] diagonal-split '>
            <div className='p-[30px]'>
                <h2 className='font-semibold text-3xl font-serif text-center  '>Raise Your Voise</h2>
                <div className='text-center'>Report an issue ... </div>
                <div>
                    <div className='form flex flex-col '>
                        {/* <input type='text area' name='issue' placeholder='Type your issue here ..' className='bg-black' /> */}

                        <label className='font-serif font-medium text-xl' htmlFor='description'> Type Your Issue here in few lines :<span className='text-red-700'> *</span></label>
                        <textarea
                            className='mt-[1rem] p-3 font-serif '
                            name='description'
                            rows={10}
                            cols={40}
                            placeholder='Description of issue ...'
                            required
                        />

                        <label className='font-serif font-medium text-xl mt-[1rem]' htmlFor='photos'>Upload any files regarding the issue :</label>
                        <input className='mt-[1rem]' type='file' placeholder='upload' name='photos' ></input>




                        
                        <button className='p-2 border border-black w-[5%] mt-[1rem] rounded-md bg-green-700 font-semibold text-white font-serif'>report</button>
                    </div>
                </div>


            </div>

        </div>

    </>
    )
}
