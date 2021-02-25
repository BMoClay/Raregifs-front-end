import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ user, setUser }) {
    function logout(){
        setUser(null);
    }

    return(
        <header>
            <div>
                <Link to="/">Raregifs</Link>
            </div>
            <div>
                {user ? (
                    <>
                        {/* <Link to="/upload" user={user} >Upload</Link> */}
                        <button onClick={logout} >logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
        </header>
    ) 
}

export default NavBar;
