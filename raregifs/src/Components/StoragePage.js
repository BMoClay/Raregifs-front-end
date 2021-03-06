import React from 'react';
import StorageCardArt from './StorageCardArt';
import StorageCardAcquisition from './StorageCardAcquisition'

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
        <div className="storage" >
          <h4>My Work</h4>
              {uArtworkCard}
          <h4>Collection</h4>
              {uAcquisitionCard}
        </div>
    );
}

export default StoragePage;
