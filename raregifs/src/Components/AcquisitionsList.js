import React from 'react'
import ArtCard from './ArtCard'

function AcquisitionsList({ user, acquisitions, onDeleteAcquisition }){

    const acquisitionsList =
    acquisitions.map((acquisition) => {
        return <ArtCard 
            key={acquisition.id} 
            user={user}
            acquisition={acquisition} 
            // setAcquisitions={setAcquisitions} 
            onDeleteAcquisition={onDeleteAcquisition}
            />
    })

    return(
        <div className="acquisitions-list">
            {acquisitionsList}
        </div>
    )
}

export default AcquisitionsList;