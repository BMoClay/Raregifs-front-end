import React, { useEffect, useState } from 'react'
import UserList from './UserList'

function UserPage({ currentUser, onAcquireArtwork }){

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(r => r.json())
            .then(usersArray => {
                setUsers(usersArray);
            })
      }, [])
  
    const userAcquisitions =
        users.map((eachUser) => {
            return <UserList
                key={eachUser.id}
                userCollection={eachUser.acquisitions}
                eachUser={eachUser}
                currentUser={currentUser} 
                onAcquireArtwork={onAcquireArtwork}
                />
        })

    return (
        <div >
           {userAcquisitions}
        </div>
    );
}
export default UserPage;