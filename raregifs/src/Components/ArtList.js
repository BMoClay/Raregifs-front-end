import React from 'react'
import ArtCard from './ArtCard'

function ArtList({ artworks }){

    console.log(artworks)
    
    const artworksList =
    artworks.map((artwork) => {
        return <ArtCard key={artwork.id} artwork={artwork} />
    })

    return(
        <div className="art-list">
            {artworksList}
        </div>
    )
}

export default ArtList;