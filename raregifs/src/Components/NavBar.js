import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'semantic-ui-react';

function NavBar({ currentUser, setCurrentUser }) {
    function logout(){
        setCurrentUser(null);
    }


    return( 
        <Dropdown pointing='top left' text="Raregifs" selection>
            <Dropdown.Menu>
                <Dropdown.Item text="Gallery" icon="trophy" as={Link} to='/'/>
                <Dropdown.Item text="Collections" icon="cogs" as={Link} to='/users'/>
                {currentUser ? (
                    <>
                        <Dropdown.Item text="Storage" icon="shopping basket" as={Link} to='/storage'/>
                        <Dropdown.Item text="Upload" icon="upload" as={Link} to='/upload'/> 
                        <Dropdown.Item text="Account" icon="secret user" as={Link} to="/account"/>
                        <Button size="mini" onClick={logout} >logout</Button>  
                    </>
                ) : (
                    <>
                        <Dropdown.Item text="Login" icon="sign-in" as={Link} to='/login'/>
                        <Dropdown.Item text="Signup" icon="signup" as={Link} to='/signup'/>
                    </>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default NavBar

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