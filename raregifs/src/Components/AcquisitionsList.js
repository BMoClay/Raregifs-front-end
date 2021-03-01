import React from 'react'
import AcquisitionCard from './AcquisitionCard'

function AcquisitionsList({ 
    thisUser,
    currentUser, 
    userCollection,
    onAcquireArtwork,
}){

    // need to run a loop on users to get each user
    // need to run a loop on each user to get each acquisition

    const userAcquisitionCard =
   
        userCollection.map((userAcquisition) => {
        return <AcquisitionCard
            key={thisUser.id}
            userAcquisition={userAcquisition}
            thisUser={thisUser}
            currentUser={currentUser} 
            onAcquireArtwork={onAcquireArtwork}
            />
    })

    return(
        <div>
             <h4>The {thisUser.name} Collection</h4>
            {userAcquisitionCard}
        </div>
    )
}

export default AcquisitionsList;