import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { loadFromLocalStorage } from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';

function Profile(props) {
    const authSvg = 'https://www.commitconsult.com/wp-content/uploads/2020/05/SVG5.gif';
    const loginState = loadFromLocalStorage()
    let username;
    if(loginState === undefined || !loginState.isLoggedIn){
        props.history.push('/login');
    }else{
        username = loginState.userName;
    }

    const [oldPassword, setOldPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(oldPassword && password1 && password2){
            if(password1 === password2){
                Axios({
                    method: 'POST',
                    url: 'https://still-brook-51810.herokuapp.com/api/profile',
                    data: {
                        oldPassword: oldPassword,
                        newPassword: password1,
                        userName: username,
                        email: loginState.email
                    },
                    withCredentials: true
                }).then(res => {
                    if(res.data.msg){
                        toast.success(res.data.msg);
                    }else if(res.data.err){
                        toast.error(res.data.err)
                    }
                }).catch(error => {
                    toast.error('Something went wrong');
                })
            }else{
                toast.error('password and confirm password do not match');
            }
        }else{
            toast.error('Please fill all fields');
        }
        setPassword1('')
        setPassword2('')
        setOldPassword('')
    }

    return (
        <div className='bg-indigo-100'>
            <Navbar username={username} history={props.history} />
            <ToastContainer  />
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                <div className='mt-12 flex flex-col items-center'>
                    <i className="fas fa-user-circle fa-5x"></i>
                    <h1 className='text-2xl xl:text-3xl font-extrabold'>
                        Profile
                    </h1>

                    <div className='w-full flex-1 mt-8 text-indigo-500' >
                    <div className='mx-auto max-w-xs relative '>
                        <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                        type='password'
                        placeholder='Old Password'
                          onChange={(e)=> setOldPassword(e.target.value)}
                          value={oldPassword}
                        />
                        <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                        type='password'
                        placeholder='New Password'
                          onChange={(e)=> setPassword1(e.target.value)}
                          value={password1}
                        />
                        <input
                        className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                        type='password'
                        placeholder='Confirm New Password'
                          onChange={(e)=> setPassword2(e.target.value)}
                          value={password2}
                        />
                        <button
                        type='submit'
                          onClick={handleSubmit} 
                        className='mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                        >
                            Update
                        </button>
                    </div>
                    
                    </div>
                </div>
                </div>
                <div className='flex-1 bg-indigo-100 text-center hidden lg:flex' >
                <div
                    className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${authSvg})` }}
                ></div>
                </div>
            </div>
        </div>
    )
}

export default Profile
