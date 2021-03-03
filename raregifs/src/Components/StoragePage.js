import React from 'react';
import StorageCardArt from './StorageCardArt';
import StorageCardAcquisition from './StorageCardAcquisition'

function StoragePage(
    { currentUser, 
      onUpdateArtwork, 
      onDeleteArtwork, 
      onDeleteAcquisition,
    }) {

    const uArtworkCard = 
        currentUser.artworks.map((artwork) => {
            return <StorageCardArt 
              key={artwork.id}
              artwork={artwork}
              onUpdateArtwork={onUpdateArtwork}
              onDeleteArtwork={onDeleteArtwork}
            />
        })
    
    const uAcquisitionCard = 
        currentUser.acquisitions.map((acquisition) => {
            return <StorageCardAcquisition
              key={acquisition.id}
              id={acquisition.id}
              artwork={acquisition.artwork}
              onDeleteAcquisition={onDeleteAcquisition}
            />
        })    

    return (
        <div className="storage" >
          <h4>Work</h4>
              {uArtworkCard}
          <h4>Collection</h4>
              {uAcquisitionCard}
        </div>
    );
}

export default StoragePage;
