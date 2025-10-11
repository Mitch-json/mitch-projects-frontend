import React, { useEffect } from 'react';
import { Link, Redirect, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



function App(props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /dashboard immediately on mount
    navigate('/dashboard');
  }, [navigate]);
  return (
    <div>
      {navigate('/dashboard')}
    </div>
  );
}

export default App;
