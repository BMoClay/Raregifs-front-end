import React, { useEffect, useState } from 'react'
import UserList from './UserList'

function UserPage({ currentUser, onAcquireArtwork }){

    const [users, setUsers] = useState([])
    console.log(currentUser)
    console.log(users)
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
                currentUser={currentUser}
                userCollection={eachUser.acquisitions}
                eachUser={eachUser}
                onAcquireArtwork={onAcquireArtwork}
                commentsReceived={eachUser.comments_received}
                />
        })

    return (
        <div >
           {userAcquisitions}
        </div>
    );
}
export default UserPage;