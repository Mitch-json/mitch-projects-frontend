import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function App(props) {
    
  return (
    <div>
      {props.history.push('/dashboard')}
    </div>
  );
}

export default App;
