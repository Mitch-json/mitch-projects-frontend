import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { store, loadFromLocalStorage } from './redux/store';
import Navbar from './components/Navbar';
import './Dashboard.css';
import ProjectPage from './views/ProjectPage/ProjectPage';

function Project() {
  const { id } = useParams();       // ✅ Get route parameter
  const navigate = useNavigate();   // ✅ Replacement for props.history
  const loginState = loadFromLocalStorage();

  let username;
  if (loginState === undefined || !loginState.isLoggedIn) {
    // maybe redirect to login page if needed
  } else {
    username = loginState.userName;
  }

  return (
    <div>
      <ProjectPage username={username} history={navigate} id={id} />
    </div>
  );
}

export default Project;
