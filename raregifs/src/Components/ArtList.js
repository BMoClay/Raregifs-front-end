import React from 'react'
import ArtCard from './ArtCard'

function ArtList({ 
    artworks, 
    currentUser, 
    onDeleteArtwork, 
    acquisitions, 
    setAcquisitions, 
    onUpdateArtwork
}){
    
  const artworksList =
    artworks.map((artwork) => {
        return <ArtCard 
            key={artwork.id} 
            currentUser={currentUser} 
            artwork={artwork}
            acquisitions={acquisitions}
            setAcquisitions={setAcquisitions}
            onDeleteArtwork={onDeleteArtwork}
            onUpdateArtwork={onUpdateArtwork}
            />
    })

    return(
        <div className="art-list">
            {artworksList}
        </div>
    )
}

export default ArtList;