import React from 'react';
import {store, loadFromLocalStorage} from './redux/store';
import Navbar from './components/Navbar';
import './Dashboard.css';
import ProjectPage from './views/ProjectPage/ProjectPage'

function Project(props) {
    const loginState = loadFromLocalStorage()
    let username;
    if(loginState === undefined || !loginState.isLoggedIn){
        props.history.push('/login');
    }else{
        username = loginState.userName;
    }
    return (
        <div>
            <ProjectPage username={username} history={props.history} id={props.match.params.id} />
            
            
        </div>
    )
}

export default Project
