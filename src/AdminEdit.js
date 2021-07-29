import React from 'react';
import {store, loadFromLocalStorage} from './redux/store';
import Navbar from './components/Navbar';
import './AdminEdit.css';
import EditProject from './views/AdminPage/EditProject';

function AdminEdit(props) {
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
            <EditProject username={username} history={props.history} id={props.match.params.id} />
            
            
        </div>
    )
}

export default AdminEdit
