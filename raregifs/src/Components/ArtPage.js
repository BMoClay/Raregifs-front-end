import React from 'react'
import ArtCard from './ArtCard'

function ArtPage({ currentUser, artworks, onAcquireArtwork }){
    
  const artworkCard =
    artworks.map((artwork) => {
        return <ArtCard key={artwork.id} artwork={artwork} currentUser={currentUser} onAcquireArtwork={onAcquireArtwork}/>
    })
    
    return(
        <div className="cards">
            {artworkCard}
        </div>
    )
}

export default ArtPage;