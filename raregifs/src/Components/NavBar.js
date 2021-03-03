import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <NavLink to="/users" exact className="button">
                    Collections
                </NavLink>
                <NavLink to="/upload" exact className="button">
                    Upload
                </NavLink>
                <NavLink to="/storage" exact className="button">
                    Storage
                </NavLink>
                {currentUser ? (
                    <>
                        <button onClick={logout} >logout</button>   
                        <NavLink to="/account" exact className="button">
                            Account
                        </NavLink>
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
