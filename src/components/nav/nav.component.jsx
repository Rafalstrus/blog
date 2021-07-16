import React from 'react';
import './nav.styles.css'
import { Link } from "react-router-dom"

export const Navigation = props => (
    <div id='nav-container'>
        <div id="nav-wrapper">
        <Link
            to="/login"
            id="goToLogin"
            className="nav-elements"
        >Login</Link>
        <Link
            to="/"
            id="goToMain"
            className="nav-elements"
        >Powerfull Blog</Link>
        <Link
            to="/add-post"
            id="goToAddPost"
            className="nav-elements"
        >Add Post</Link>
        {console.log('%c Oh my heavens! ', 'background: #222; color: #bada55;cursor: pointer;')}
        </div>
    </div>
)