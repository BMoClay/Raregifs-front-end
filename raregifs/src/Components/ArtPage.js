import React from 'react'
import ArtCard from './ArtCard'

function ArtPage({ currentUser, artworks, onAcquireArtwork }){
    
  const artworkcards =
    artworks.map((artwork) => {
        return <ArtCard key={artwork.id} currentUser={currentUser} onAcquireArtwork={onAcquireArtwork}/>
    })
    
    return(
        <div className="cards">
            {artworkcards}
        </div>
    )
}

export default ArtPage;