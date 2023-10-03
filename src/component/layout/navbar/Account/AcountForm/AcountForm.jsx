import React, { useState } from 'react';
import './AcountForm.css';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link } from 'react-router-dom';
import Login from '../login/login.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




export default function AcountForm() {

    const [isOpenDN, setIsOpenDN] = useState(false);
    const hanleDNClick = () =>{
        setIsOpenDN(!isOpenDN);
    };
    const scrollToTopLogin = () => {
        window.scrollTo(0, 0);
      };
      const scrollToTopRe = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div className ="AcountForm">
        <div className="AcountFormDN"
            // onClick = {hanleDNClick}
        >
            <Link to={"/login"}
                onClick={scrollToTopLogin} 
                className="AcountFormDN-tt">
                <LoginIcon/>Đăng nhập
            </Link>
  
        </div>

        <div className="AcountFormDK">
            <Link to={"/register"} 
                onClick={scrollToTopRe}
                className="AcountFormDN-tt">
                <PersonAddAltIcon/>Đăng ký
            </Link>
        </div>
    </div>
  )
}
