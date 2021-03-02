import React, { useEffect, useState } from 'react'
import AcquisitionsList from './AcquisitionsList'

function AcquisitionsPage({ 
    currentUser,
    onAcquireArtwork,  
}){
    // const [collection, setCollection] = useState([])
    const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
        .then(r => r.json())
        .then(usersArray => {
            setUsers(usersArray);
        })
  }, [])


    const userAcquisitions =
    users.map((thisUser) => {
        return <AcquisitionsList
            key={thisUser.id}
            userCollection={thisUser.acquisitions}
            thisUser={thisUser}
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
export default AcquisitionsPage;