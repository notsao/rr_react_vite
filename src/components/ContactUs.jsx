import React from 'react';


function ContactUs() {


  return (
    <div className='flex justify-center items-center'>
        <div className='bg-orange-500 w-1/2 rounded-xl'> 
            <div className="px-5 py-5 w-1/2 flex-col justify-center items-center">
                <label class="block text-white text-2xl font-bold mb-2" for="email"> GET A QUOTE TODAY! </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Email" type="text" placeholder="Email Address"/>
            </div>
        </div>
    </div>
  )

}

export default ContactUs
