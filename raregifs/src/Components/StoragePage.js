import React from 'react';
import StorageCardArt from './StorageCardArt';
import StorageCardAcquisition from './StorageCardAcquisition'
import { 
  Header
} from 'semantic-ui-react'

function StoragePage({ 
    currentUser,
    acquisitions,
    artworks,
    onDeleteArtwork, 
    onUpdateArtwork, 
    onDeleteAcquisition, 
  }) {

  const uAcquisitions = acquisitions.filter((acquisition) => acquisition.user.id === currentUser.id)
  const uArtworks = artworks.filter((artwork) => artwork.user.id === currentUser.id)

      const uArtworkCard =
        currentUser ? (uArtworks.map((artwork) => {   
                return <StorageCardArt 
                key={artwork.id}
                artwork={artwork}
                collected_by={artwork.acquiring_users}
                onUpdateArtwork={onUpdateArtwork}
                onDeleteArtwork={onDeleteArtwork}
                />
            }
            )) : (null)          
      
      const uAcquisitionCard = 
        currentUser ? (uAcquisitions.map((acquisition) => {
                return <StorageCardAcquisition
                  key={acquisition.id}
                  acquisition={acquisition}
                  artwork={acquisition.artwork}
                  onDeleteAcquisition={onDeleteAcquisition}
                />
            }    
        )) : (null)
         

    return (
      <div>
        <Header 
            textAlign='center'

        >
            My Work
        </Header>
        {uArtworkCard}
        <Header
          textAlign='center'
        >
        My Collection
        </Header>
        {uAcquisitionCard}
      </div>
    );
}

export default StoragePage;