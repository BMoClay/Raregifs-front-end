import React from 'react';
import StorageCardArt from './StorageCardArt';
import StorageCardAcquisition from './StorageCardAcquisition';

function StorageList({ currentUser, onDeleteAcquisition, onDeleteArtwork, onUpdateArtwork }){

    let myArtworksList =
    currentUser.artworks.map((userArtwork) => {
        return <StorageCardArt
            userArtwork={userArtwork} 
            key={userArtwork.id} 
            onDeleteArtwork={onDeleteArtwork}
            onUpdateArtwork={onUpdateArtwork}
            />
    })

    let myAcquisitionsList =
    currentUser.acquisitions.map((userAcquisition) => {
        return <StorageCardAcquisition
            userAcquisition={userAcquisition} 
            key={userAcquisition.id} 
            onDeleteAcquisition={onDeleteAcquisition}
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