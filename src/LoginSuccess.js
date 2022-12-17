import React, { useEffect } from 'react'
import store from './redux/store';
import './LoginSuccess.css'

function LoginSuccess() {
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/google/get/details`).then(res => {
            if(res.ok){
            return res.json()
            } 
        }).then(data => {
            store.dispatch({
                type: "SET_LOGIN_STATE",
                payload: {
                  userId: data._id,
                  userName: data.name,
                  email: data.email
                }
            });
            setTimeout(() => {
                window.close()
            }, 600);
        })
    }, [])
    return (
        <div className="tag-div">
            <h2 className="tag">Successfully Logged In </h2>
        </div>
    )
}

export default LoginSuccess
