import React,{useContext} from 'react';
import './nav.styles.css'
import { Link } from "react-router-dom"

import Cookies from 'universal-cookie';

import { connect } from 'react-redux'
import actions from '../../redux-store/duck/actions'
import { ReactReduxContext } from 'react-redux'

const cookies = new Cookies();

 const Navigation = ({setToken}) => {
    const { store } = useContext(ReactReduxContext)
    const authToken = store.getState().token;
    
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
                        onClick={() => { Logout(authToken,setToken) }}
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
function Logout(authToken,setToken) {
    cookies.remove("token")
    setToken(cookies.get("token"))

    console.log(cookies.get("token"))
    //here destroy cookie, and destroy redux store value
}
const mapDispatchToProps = dispatch => ({
    setToken: (token) => dispatch(actions.setToken(token))
  })
  
export default connect(null, mapDispatchToProps)(Navigation)