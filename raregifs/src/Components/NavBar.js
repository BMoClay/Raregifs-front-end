import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
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
                // textAlign: 'left',
                // display: 'block',
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


//{/* onClick={(event, userOptions) => userOptions.redirect(userOptions.pathname)} */}

    // <Dropdown pointing='top left' default="Raregifs" fluid search selection>
    //     <Dropdown.Menu>
    //         <Dropdown.Item text="Raregifs" icon="trophy" as={Link} to='/'/>
    //         <Dropdown.Item text="Collections" icon="cogs" as={Link} to='/users'/>
    //         <Dropdown.Item text="Storage" icon="shopping basket" as={Link} to='/storage'/>
    //         <Dropdown.Item text="Upload" icon="upload" as={Link} to='/upload'/>
    //     </Dropdown.Menu>
    // </Dropdown>


    // <Select pointing='top left' defaultValue={this.state.selected} fluid search selection>
    // <Select text="Raregifs" icon="trophy" as={Link} to='/'/>
    // <Select text="Collections" icon="cogs" as={Link} to='/users'/>
    // <Select text="Storage" icon="shopping basket" as={Link} to='/storage'/>
    // <Select text="Upload" icon="upload" as={Link} to='/upload'/>
    // </Select>
    // );