import React from 'react';
import './nav.styles.css'
import { Link } from "react-router-dom"

import Cookies from 'universal-cookie';

import store from '../../store.js';

const cookies = new Cookies();

export const Navigation = props => {
    const state = store.getState();
    const authToken = state.token;
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55;cursor: pointer;')
    //here add if authToken is not null render login/register, ese render logout
    return (
        <div id='nav-container'>
            <div id="nav-wrapper">
                {(authToken!=="missing") ?

                    <Link
                        to=""
                        id="goToLogout"
                        className="nav-elements"
                        onClick={() => { Logout() }}
                    >Logout</Link>
                    :
                    (
                        <div>
                        <Link
                            to="/login"
                            id="goToLogin"
                            className="nav-elements"
                        >Login/</Link>
                        <Link
                            to="/register"
                            id="goToRegister"
                            className="nav-elements"
                        >Register</Link>
                        </div>)
                }
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
            </div>
        </div>
    )
}
function Logout() {
    cookies.remove("token")
    //here destroy cookie, and destroy redux store value
}