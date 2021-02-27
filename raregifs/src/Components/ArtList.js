import React from 'react'
import ArtCard from './ArtCard'

function ArtList({ artworks, user, onDeleteArtwork, onUpdateArtwork, onDeleteAcquisition }){
  
    const artworksList =
    artworks.map((artwork) => {
        return <ArtCard 
            key={artwork.id} 
            user={user} 
            artwork={artwork}
            onDeleteAcquisition={onDeleteAcquisition}
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