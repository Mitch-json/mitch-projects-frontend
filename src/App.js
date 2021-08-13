import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function App(props) {
  useEffect(() => {
    props.history.push('/dashboard')
  }, [])
  return (
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
      
    </div>
  );
}

export default App;
