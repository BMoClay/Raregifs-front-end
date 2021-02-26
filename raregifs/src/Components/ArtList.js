import React from 'react'
import ArtCard from './ArtCard'

function ArtList({ artworks, user, onDeleteArtwork, onUpdateArtwork, acquisitions, onDeleteAcquisition }){
  
    const artworksList =
    artworks.map((artwork) => {
        return <ArtCard 
            key={artwork.id} 
            user={user} 
            artwork={artwork}
            // setArtworks={setArtworks} 
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