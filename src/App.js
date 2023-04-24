import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import BlogNav from "./component/BlogNav";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Index from "./pages/Index";
import Cart from "./component/Cart";
import LoginDashboard from "./pages/LoginDashboard";



import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson, removePerson } from './Redux/Reducers/cartSlice';

function App() {


  const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const responseMessage = (response) => {
        console.log(response.credential);
    };
    const errorMessage = (error) => {
        console.log(error);
    };


    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    const logOut = () => {
      googleLogout();
      dispatch(removePerson())
      setProfile(null);
  };

const dispatch = useDispatch();
    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        // setProfile(res.data);
                        dispatch(addPerson(res.data));
                        window.location.href="/";

                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

  const userDetail = useSelector(
    state => state.person
  );

  React.useEffect(()=>{
    setProfile(userDetail[0])
  }, [])

  console.log(userDetail)
  return (
    <>
      <div>
         {profile ? (
            <div>
              <Header/>
              <BlogNav/>
                <Routes>
                  {/* <Route path="/" element={<LoginDashboard/>}/> */}
                  
                  <Route path="/" element={<LoginDashboard/>}/>
                  <Route path="/home" element={<Index/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                </Routes>
                <Footer/>
            </div>
      ) :
      (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
    )}
    </div>
    </>
  );
}

export default App;
