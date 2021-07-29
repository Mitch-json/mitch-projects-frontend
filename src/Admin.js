import React from 'react';
import {store, loadFromLocalStorage} from './redux/store';
import Navbar from './components/Navbar';
import './Admin.css';
import AdminPage from './views/AdminPage/AdminPage';

function Admin(props) {
    const loginState = loadFromLocalStorage()
    let username;
    if(loginState === undefined || !loginState.isLoggedIn){
        props.history.push('/login');
    }else{
        if (loginState.email == "mitchjaga77@gmail.com") {
            username = loginState.userName;
        } else {
            props.history.push('/dashboard')
        }
    }
    return (
        <div>
            <AdminPage username={username} history={props.history} />
            
            
        </div>
    )
}

export default Admin
