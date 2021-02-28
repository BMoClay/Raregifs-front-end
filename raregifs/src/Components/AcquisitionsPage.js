import React from 'react'
import AcquisitionsList from './AcquisitionsList'

function AcquisitionsPage({ currentUser, acquisitions, setAcquisitions, onAcquireArtwork, onDeleteAcquisition }){

    console.log(currentUser)
    return (
        <div className="acquisitions-page" >
            <AcquisitionsList 
                currentUser={currentUser}
                acquisitions={acquisitions}  
                setAcquisitions={setAcquisitions}
                onDeleteAcquisition={onDeleteAcquisition}
                onAcquireArtwork={onAcquireArtwork}
                />
        </div>
    );
    }
export default AcquisitionsPage;