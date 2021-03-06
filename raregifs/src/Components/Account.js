import React from 'react';
import AccountUpdateForm from './AccountUpdateForm';

function Account({ currentUser, setCurrentUser }) {

    const { name, id } = currentUser

    function handleDeleteUserClick() {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
    }
  
    return (
        <div>
            <h3>{name}</h3>
            <AccountUpdateForm 
                currentUser={currentUser} 
                setCurrentUser={setCurrentUser} 
            />
            <button onClick={handleDeleteUserClick}>Delete Account</button>
        </div>
    )

}

export default Account