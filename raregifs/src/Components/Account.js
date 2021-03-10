import React from 'react';
import AccountUpdateForm from './AccountUpdateForm';
import { Button } from 'semantic-ui-react'

function Account({ currentUser, setCurrentUser }) {

    const { name, id } = currentUser

    function handleDeleteUserClick() {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
    }
    
    function logout(){
        setCurrentUser(null);
    }
  
    return (
        <div>
            <h3>{name}</h3>
            <AccountUpdateForm 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
            />
            <Button onClick={handleDeleteUserClick}>Delete Account</Button>
            <Button size="mini" onClick={logout} >logout</Button>  
        </div>
    )

}

export default Account