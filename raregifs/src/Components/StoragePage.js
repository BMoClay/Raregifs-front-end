import React, { useState } from 'react';
import StorageCardArt from './StorageCardArt';
import StorageCardAcquisition from './StorageCardAcquisition'

function StoragePage({ currentUser }) {

      const [userArtworks, setUserArtworks] = useState(currentUser.artworks)
      const [userAcquisitions, setUserAcquisitions] = useState(currentUser.acquisiitons)

      function handleDeleteAcquisition(id) {
          const updatedAcquisitionsArray = currentUser.acquisitions.filter((acquisition) => acquisition.id !== id);
          setUserAcquisitions(updatedAcquisitionsArray);
      } 
    
      function handleUpdateArtwork(updatedArtwork) {
          const updatedArtworksArray = currentUser.artworks.map((artwork) => {
              if (artwork.id === updatedArtwork.id) {
                  return updatedArtwork;
              } else {
                  return artwork;
              }
          })
          setUserArtworks(updatedArtworksArray);
      }
    
      function handleDeleteArtwork(id) {
          const updatedArtworksArray = currentUser.artworks.filter((artwork) => artwork.id !== id);
          setUserArtworks(updatedArtworksArray);
      }  

      const uArtworkCard =
          userArtworks.map((artwork) => { 
              return <StorageCardArt 
                key={artwork.id}
                artwork={artwork}
                onUpdateArtwork={handleUpdateArtwork}
                onDeleteArtwork={handleDeleteArtwork}
              />
          })
      
      const uAcquisitionCard = 
          userAcquisitions.map((acquisition) => {
              return <StorageCardAcquisition
                key={acquisition.id}
                id={acquisition.id}
                artwork={acquisition.artwork}
                onDeleteAcquisition={handleDeleteAcquisition}
              />
          })    

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