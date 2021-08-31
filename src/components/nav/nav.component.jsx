import './nav.styles.css'
import { Link } from "react-router-dom"

import {connect} from 'react-redux'
import {mapStateToProps,mapDispatchToProps} from '../../redux-store/operation'

 const Navigation = () => {
    
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55;cursor: pointer;')
    //here add if authToken is not null render login/register, ese render logout
    return (
        <div id='nav-container'>
            <div id="nav-wrapper">
                {('missing'!=="missing") ?

                    <Link
                        to=""
                        id="goToLogout"
                        className="nav-elements"
                        onClick={()=>{}
                            //() => { Logout(authToken,setToken) }
                    }
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
  
export default connect(mapStateToProps,mapDispatchToProps)(Navigation)