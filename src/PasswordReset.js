import Axios from 'axios';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function PasswordReset() {
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [className, setClassName] = useState('mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none')
    const handleClick = ()=>{
        setDisabled(true);
        setClassName('mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none')
        Axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BACKEND_URL}/api/password-reset/email`,
            data: {
                email: email,
                password: password
            },
            withCredentials: true
        }).then(res => {
            if(res.data.msg){
                toast.success(res.data.msg);
            }else if(res.data.err){
                toast.error(res.data.err);
                setDisabled(false);
                setClassName('mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none');
            }
        }).catch(err => toast.error(err));
        setEmail('');
        setPassword('');
    }
    return (
        <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
            <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-8/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-2xl font-extrabold  text-center '>
              Enter your email
            </h1>
            <div className='w-full flex-1 mt-8 text-indigo-500'>
              <div className='my-12 border-b text-center'>
                
              </div>
              <div className='mx-auto max-w-xs relative '>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='email'
                  placeholder='Email'
                  onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='New Password'
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                />
                <button
                    onClick={handleClick}
                    disabled={disabled}
                    className={className}
                >
                  <span className='ml-3'>Send</span>
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

export default PasswordReset
