import React from 'react'
import ArtCard from './ArtCard'

function ArtList({ 
    currentUser,
    artworks,
    setArtworks,
    acquisitions,
    setAcquisitions,  
    onAcquireArtwork,
}){
    
  const artworksList =
    artworks.map((artwork) => {
        return <ArtCard 
            key={artwork.id} 
            currentUser={currentUser} 
            artwork={artwork}
            setArtworks={setArtworks}
            acquisitions={acquisitions}
            setAcquisitions={setAcquisitions}
            onAcquireArtwork={onAcquireArtwork}
            />
    })
    // console.log(artwork)
    return(
        <div className="art-list">
            {artworksList}
        </div>
    )
}

export default ArtList;