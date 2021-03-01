import React from 'react'
import ArtCard from './ArtCard'

function ArtList({ 
    currentUser,
    artworks,  
    onAcquireArtwork,
}){
    
  const artworksList =
    artworks.map((artwork) => {
        return <ArtCard 
            key={artwork.id} 
            currentUser={currentUser} 
            artwork={artwork}
            onAcquireArtwork={onAcquireArtwork}
            />
    })

    return(
        <div className="art-list">
            {artworksList}
        </div>
    )
}

export default ArtList;