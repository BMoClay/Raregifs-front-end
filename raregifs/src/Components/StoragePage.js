import React from 'react';
import StorageCardArt from './StorageCardArt';
import StorageCardAcquisition from './StorageCardAcquisition'

function StoragePage({ 
    currentUser,
    onDeleteArtwork, 
    onUpdateArtwork, 
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
                acquisition={acquisition}
                artwork={acquisition.artwork}
                onDeleteAcquisition={onDeleteAcquisition}
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

    // userArtworks,
    // setUserArtworks,
    // userAcquisitions,
    // setUserAcquisitions, 
  
      // const [userArtworks, setUserArtworks] = useState(currentUser.artworks)
      // const [userAcquisitions, setUserAcquisitions] = useState(currentUser.acquisitions)

      // function handleDeleteUserAcquisition(id) {
      //     const updatedAcquisitionsArray = userAcquisitions.filter((acquisition) => acquisition.id !== id);
      //     setUserAcquisitions(updatedAcquisitionsArray);
      // } 
    
      // function handleUpdateUserArtwork(updatedArtwork) {
      //     const updatedArtworksArray = userArtworks.map((artwork) => {
      //         if (artwork.id === updatedArtwork.id) {
      //             return updatedArtwork;
      //         } else {
      //             return artwork;
      //         }
      //     })
      //     setUserArtworks(updatedArtworksArray);
      // }
    
      // function handleDeleteUserArtwork(id) {
      //     const updatedArtworksArray = userArtworks.filter((artwork) => artwork.id !== id);
      //     setUserArtworks(updatedArtworksArray);
      // }  

         // userArtworks.map((artwork) => { 


         // onUpdateUserArtwork={handleUpdateUserArtwork}
         // onDeleteUserArtwork={handleDeleteUserArtwork}
       
         // setUserArtworks={setUserArtworks}
          // onDeleteUserAcquisition={handleDeleteUserAcquisition}
             // setUserAcquisitions={setUserAcquisitions}