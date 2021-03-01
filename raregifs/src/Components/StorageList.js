import React from 'react'
import ArtCard from './ArtCard'
import AcquisitionCard from './AcquisitionCard'

function StorageList({ 
    artworks, 
    currentUser, 
    onDeleteArtwork, 
    acquisitions, 
    setAcquisitions, 
    onUpdateArtwork,
    onDeleteAcquisition
}){

    let myArtworksList =
    currentUser.artworks.map((artwork) => {
        return <ArtCard 
            key={artwork.id} 
            currentUser={currentUser} 
            artwork={artwork}
            acquisitions={acquisitions}
            onDeleteArtwork={onDeleteArtwork}
            onUpdateArtwork={onUpdateArtwork}
            />
    })

    let myAcquisitionsList =
    currentUser.acquisitions.map((acquisition) => {
        return <AcquisitionCard 
            key={acquisition.id} 
            acquisition={acquisition}
            currentUser={currentUser} 
            acquisitions={acquisitions}
            setAcquisitions={setAcquisitions}
            onDeleteAcquisition={onDeleteAcquisition}
            />
    })
    return(
        <div className="my-storage">
            <h2>Works</h2>
            {myArtworksList}
            <h2>Acquisitions</h2>
            {myAcquisitionsList}
        </div>
    )
}

export default StorageList;