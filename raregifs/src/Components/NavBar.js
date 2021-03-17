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
                position: 'relative',
                width: '90px',
                fontSize: '1.2em',
                color: 'red',
            }}>
            <Dropdown.Menu text="Raregifs" fluid floating>
                <Dropdown.Item text="Gallery" icon="trophy" as={Link} to='/'/>
                <Dropdown.Item text="Collections" icon="university" as={Link} to='/users_collections'/>
                {currentUser ? (
                    <>
                        <Dropdown.Item text="Storage" icon="shopping basket" as={Link} to='/my_storage'/>
                        <Dropdown.Item text="Studio" icon="pencil" as={Link} to='/studio'/> 
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
