import React from 'react';
import { NavLink } from 'react-router-dom';
// import React, { Component } from 'react';
// class NavBar extends Component{
//     render(){
//         return(

//         );
//     }
// }
function NavBar({ currentUser, setCurrentUser }) {
    function logout(){
        setCurrentUser(null);
    }

    return(
        <header>
            <div>
                <NavLink to="/" exact className="button">
                    Raregifs
                </NavLink>
                <NavLink to="/acquisitions" exact className="button">
                    Collections
                </NavLink>
                <NavLink to="/upload" exact className="button">
                    Upload
                </NavLink>
                <NavLink to="storage" exact className="button">
                    Storage
                </NavLink>
            </div>
            <div>
                {currentUser ? (
                    <>
                        {/* <NavLink to="/upload" user={user} >Upload</NavLink> */}
                        <button onClick={logout} >logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" exact className="button">
                            Login
                        </NavLink>
                        <NavLink to="/signup" exact className="button" >
                            Signup
                        </NavLink>
                    </>
                )}
            </div>
        </header>
    ); 
}

export default NavBar;
