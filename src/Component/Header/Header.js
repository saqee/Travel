import React from 'react';



import logo from './../../Logo.png'
import './Header.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
  } from "react-router-dom";
const Header = () => {
  
    return (
        <div >
            <nav className="nav1">
                <img src={logo} alt="" style={{height:'60px',width:'120px'}}/>
                <input type="text" className="fromControl"placeholder="search your place" name="" id=""/>
            </nav>
            
            <nav className="nav2">
                <a href="/">Home</a>
                
                <a href="/login">Login</a>
                
                
            </nav>
            
        </div>
    );
};

export default Header;