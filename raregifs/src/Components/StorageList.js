import React from 'react';
import ArtStorageCard from './ArtStorageCard';
import AcquisitionStorageCard from './AcquisitionStorageCard';


function StorageList({ 
    currentUser, 
}){

    let myArtworksList =
    currentUser.artworks.map((userArtwork) => {
        return <ArtStorageCard 
            key={userArtwork.id} 
            currentUser={currentUser} 
            userArtwork={userArtwork}
            />
    })

    let myAcquisitionsList =
    currentUser.acquisitions.map((userAcquisition) => {
        return <AcquisitionStorageCard 
            key={userAcquisition.id} 
            userAcquisition={userAcquisition}
            currentUser={currentUser} 
            />
    })

    return(
        <div className="my-storage">
            <h2>My Work</h2>
            {myArtworksList}
            <h2>My Acquisitions</h2>
            {myAcquisitionsList}
        </div>
    )
}

export default StorageList;