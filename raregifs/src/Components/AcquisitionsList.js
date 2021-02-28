import React from 'react'
import AcquisitionCard from './AcquisitionCard'

function AcquisitionsList({ 
    users,
    currentUser, 
    acquisitions, 
    setAcquisitions
}){

    // need to run a loop on users to get each user
    // need to run a loop on each user to get each acquisition
    
    const userAcquisition =
    users.map((user) => {
        return <AcquisitionCard
            key={user.id}
            // thisCollection={thisCollection}
            user={user}
            currentUser={currentUser} 
            acquisitions={acquisitions} 
            setAcquisitions={setAcquisitions} 
            />
    })

    return(
        <div className="acquisitions-list">
            {userAcquisition}
        </div>
    )
}

export default AcquisitionsList;