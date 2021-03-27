import React from 'react';
import axios from 'axios';
import AccountUpdateForm from './AccountUpdateForm';
import { Button } from 'semantic-ui-react'

function Account({ 
    currentUser, 
    setCurrentUser,
    onDeleteUser,
}) {

    const { name, id } = currentUser

    function handleDeleteUserClick() {
        axios.delete(`/users/${id}`)
            .then(response => {
                onDeleteUser(response.data)
            })
    }
    
    function logout(){
        localStorage.removeItem("token")
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