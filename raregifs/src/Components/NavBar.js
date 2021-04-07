import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

function NavBar({ currentUser }) {

    return( 
        <Dropdown
            icon='null'
            text="Raregifs" 
            fluid 
            floating 
            style={{
                width: '90px',
                fontSize: '1.2em',
                color: 'red',
                margin: '10px',
            }}>
            <Dropdown.Menu text="Raregifs">
                <Dropdown.Item text="Gallery" icon="trophy" as={Link} to='/'/>
                {currentUser ? (
                    <>
                        <Dropdown.Item text="Home" icon="home" as={Link} to='/home'/> 
                        <Dropdown.Item text="Studio" icon="pencil" as={Link} to='/studio'/> 
                        <Dropdown.Item text="Storage" icon="shopping basket" as={Link} to='/my_storage'/>
                        <Dropdown.Item text="Collections" icon="university" as={Link} to='/users_collections'/>
                        <Dropdown.Item text="Account" icon="sign-out alternate" as={Link} to="/account"/>
                    </>
                ) : (
                    <>  
                        <Dropdown.Item text="Login" icon="sign-in" as={Link} to='/login'/>
                        <Dropdown.Item text="Signup" icon="signup" as={Link} to='/signup'/>
                    </>
                )}
            </Dropdown.Menu>
        </Dropdown>
    )
    
}

export default NavBar
