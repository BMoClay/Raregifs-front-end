import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';

function NavBar({ currentUser }) {

    return( 
        <Menu 
        vertical
        fluid 
        floating 
        style={{
            border: 'none',
            width: '90px'
        }}
        >
            <Dropdown
                icon=''
                text="Raregifs" 
                fluid 
                floating 
                style={{
                    width: '60px',
                    fontSize: '1.2em',
                    color: 'red',
                    margin: '10px',
                    position: 'fixed',
                }}
            >
                <Dropdown.Menu text="Raregifs" style={{                 
                    // position: 'fixed'
                }}>
                    <Dropdown.Item text="Gallery" icon="trophy" as={Link} to='/'/>
                    {currentUser ? (
                        <>
                            <Dropdown.Item text="Studio" icon="pencil" as={Link} to='/studio'/> 
                            <Dropdown.Item text="Collections" icon="university" as={Link} to='/users_collections'/>
                            <Dropdown.Item text="My Storage" icon="save" as={Link} to='/my_storage'/>
                            <Dropdown.Item text="Account" icon="sign-out alternate" as={Link} to="/account"/>
                            <Dropdown.Item text="Demo Video" icon="play" as={Link} to='/demo'/>
                        </>
                    ) : (
                        <>  
                            <Dropdown.Item text="Demo Video" icon="play" as={Link} to='/demo'/>
                            <Dropdown.Item text="Login" icon="sign-in" as={Link} to='/login'/>
                            <Dropdown.Item text="Signup" icon="signup" as={Link} to='/signup'/>
                        </>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </Menu>
    )
    
}

export default NavBar