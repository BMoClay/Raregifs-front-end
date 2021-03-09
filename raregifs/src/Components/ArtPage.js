import React from 'react'
import ArtCard from './ArtCard'
import { Container } from 'semantic-ui-react'

function ArtPage(
    { 
        currentUser, 
        artworks, 
        onAcquireArtwork, 
    }
) {
    
  const artworkCard =
    artworks.map((artwork) => {
        return <ArtCard 
            key={artwork.id} 
            artwork={artwork} 
            currentUser={currentUser} 
            onAcquireArtwork={onAcquireArtwork}/>
    })
    
    return(
        <Container style={{ margin: 20 }}>
            {artworkCard}
      </Container>
    )
}

export default ArtPage;