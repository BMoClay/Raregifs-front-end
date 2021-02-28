import React from 'react'
import AcquisitionCard from './AcquisitionCard'

function AcquisitionsList({ 
    currentUser, 
    acquisitions, 
    setAcquisitions, 
    onDeleteAcquisition 
}){

    const acquisitionsList =
    acquisitions.map((acquisition) => {
        return <AcquisitionCard 
            key={acquisition.id} 
            currentUser={currentUser} 
            acquisition={acquisition} 
            setAcquisitions={setAcquisitions} 
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