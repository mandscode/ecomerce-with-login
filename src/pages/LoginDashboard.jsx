import React, { useState, useEffect } from 'react';

import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Form from '../component/Regis';
import { useDispatch, useSelector } from 'react-redux';
import { removePerson } from '../Redux/Reducers/cartSlice';

const LoginDashboard = () => {
    const [ profile, setProfile ] = useState([]);

    const dispatch = useDispatch();
    const logOut = () => {
        googleLogout();
        dispatch(removePerson())
        window.location.href="/"
    };

    const userDetail = useSelector(
        state => state.person
      );
    
      React.useEffect(()=>{
        setProfile(userDetail[0])
      }, [])

    return (
        <> 
        <div className='_login'>
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    {/* <Form profile={profile}/> */}
                    <button onClick={logOut}>Log out</button>
                </div>
        </div>
        </>
    );
}

export default LoginDashboard;

