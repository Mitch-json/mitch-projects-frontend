import React from 'react';
import {store, loadFromLocalStorage} from './redux/store';
import Navbar from './components/Navbar';
import './Dashboard.css';
import LandingPage from './views/LandingPage/LandingPage'

function Dashboard(props) {
    const loginState = loadFromLocalStorage()
    let username;
    if(loginState === undefined || !loginState.isLoggedIn){
        props.history.push('/login');
    }else{
        if(loginState.email == "mitchjaga77@gmail.com"){
            props.history.push('/admin')
        }
        username = loginState.userName;
    }
    return (
        <div>
            <LandingPage username={username} history={props.history} />
            
            
        </div>
    )
}

export default Dashboard
