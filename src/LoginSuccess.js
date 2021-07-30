import React, { useEffect } from 'react'
import store from './redux/store';
import './LoginSuccess.css'

function LoginSuccess() {
    useEffect(() => {
        setTimeout(() => {
            window.close()
        }, 800);
    }, [])
    return (
        <div className="tag-div">
            <h2 className="tag">Successfully Logged In </h2>
        </div>
    )
}

export default LoginSuccess
