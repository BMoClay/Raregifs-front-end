import React from 'react'
// import React, { useState } from 'react'
import AcquisitionsList from './AcquisitionsList'

function AcquisitionsPage({ 
    users, 
    currentUser,
    onAcquireArtwork,  
}){
    // const [collection, setCollection] = useState([])

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