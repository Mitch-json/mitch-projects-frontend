import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {GoogleLogin} from 'react-google-login';
import Axios from 'axios';
import store from './redux/store';

function Login(props) {
    const authSvg = 'https://raw.githubusercontent.com/Mohammed-Abdelhady/FULL-MERN-AUTH-Boilerplate/588f77e6b490878c99a4506821fd19e4e458b081/client-react/src/assests/auth.svg';

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    

    const googleLogin = async()=>{
      let timer: NodeJS.Timeout | null = null;
      const googleLoginUrl = "https://still-brook-51810.herokuapp.com/api/login/google"
      const newWindow = window.open(googleLoginUrl ,"_blank", "width=500, height=600")
      
      if(newWindow){
        timer = setInterval(() => {
          if (newWindow.closed) {
            if (timer) {
              clearInterval(timer)
            }
            props.history.push({
                pathname: '/dashboard'
            });
          } 
        }, 500);
      }
    }
    const FacebookLogin = async()=>{
      let timer: NodeJS.Timeout | null = null;
      const facebookLoginUrl = "https://still-brook-51810.herokuapp.com/api/login/facebook"
      const newWindow = window.open(facebookLoginUrl ,"_blank", "width=500, height=600")
      
      if(newWindow){
        timer = setInterval(() => {
          if (newWindow.closed) {
            if (timer) {
              clearInterval(timer)
            }
            props.history.push({
                pathname: '/dashboard'
            });
          } 
        }, 500);
      }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        Axios({
            method: 'POST',
            url: 'https://still-brook-51810.herokuapp.com/api/login',
            data:{
                username: username,
                password: password
            },
            withCredentials: true
        }).then(res => {
            store.dispatch({
              type: "SET_LOGIN_STATE",
              payload: {
                userId: res.data._id,
                userName: res.data.name,
                email: res.data.email
              }
            });
            props.history.push({
                pathname: '/dashboard'
            });
        }).catch(err => toast.error('Wrong email or password'))
    }

    return (
        <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Sign In to Mitch's site
            </h1>
            <div className='w-full flex-1 mt-8 text-indigo-500'>
              <div className='flex flex-col items-center'>
                
                  <button
                    onClick={googleLogin}
                    className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                  >
                    <div className=' p-2 rounded-full '>
                      <i className='fab fa-google ' />
                    </div>
                    <span className='ml-4'>Sign In with Google</span>
                  </button>
                
                  <button
                    onClick={FacebookLogin}
                    className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  >
                    <div className=' p-2 rounded-full '>
                      <i className='fab fa-facebook' />
                    </div>
                    <span className='ml-4'>Sign In with Facebook</span>
                  </button>

                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  href='/register'
                  target='_self'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2 text-indigo-500' />
                  <span className='ml-4'>Sign Up</span>
                </a>
              </div>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Or sign In with e-mail
                </div>
              </div>
              <form
                className='mx-auto max-w-xs relative '
                onSubmit={handleSubmit}
              >
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='email'
                  placeholder='Email'
                  onChange={(e)=> setUsername(e.target.value)}
                />
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                  type='password'
                  placeholder='Password'
                  onChange={(e)=> setPassword(e.target.value)}
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Sign In</span>
                </button>
                <Link
                  to='/users/password/forget'
                  className='no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2'
                >
                  Forget password?
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
      ;
    </div>
    )
}

export default Login
