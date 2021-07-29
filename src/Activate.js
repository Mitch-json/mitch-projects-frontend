import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios';

function Activate() {
    let {token} = useParams();
    console.log(token)
    const [disabled, setDisabled] = useState(false);
    const [className, setClassName] = useState('mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none')
    const handleClick = ()=>{
        setDisabled(true);
        setClassName('mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none')

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: token})
        };
        fetch('https://still-brook-51810.herokuapp.com/api/email-activate', requestOptions)
            .then(response => response.json())
            .then(data => {
              toast(data.message);
        });
    }

    return (
        <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
            <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-8/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-2xl font-extrabold  text-center '>
              Activate your account
            </h1>
            <div className='w-full flex-1 mt-8 text-indigo-500'>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Features
                </div>
              </div>
              <div className='mx-auto max-w-xs relative '>
                <button
                    onClick={handleClick}
                    disabled={disabled}
                    className={className}
                >
                  <span className='ml-3'>Activate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
    )
}

export default Activate
