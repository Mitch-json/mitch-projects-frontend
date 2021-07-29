import React from 'react';
import {store, loadFromLocalStorage} from './redux/store';
import Navbar from './components/Navbar';
import './AdminAdd.css';
import AddProject from './views/AdminPage/AddProject';

function AdminAdd(props) {
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
            <AddProject username={username} history={props.history} />
            
            
        </div>
    )
}

export default AdminAdd
