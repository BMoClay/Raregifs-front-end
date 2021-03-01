import React from 'react';
import StorageList from './StorageList'

  function Storage({ 
      currentUser, 
      artworks, 
      acquisitions, 
      setAcquisitions, 
      setArtworks, 
      // onDeleteArtwork, 
      // onUpdateArtwork,
      // onDeleteAcquisition
 }) {

  console.log(currentUser)
  return (
      <div className="storage" >
        <StorageList
            acquisitions={acquisitions}
            currentUser={currentUser} 
            artworks={artworks}
            setAcquisitions={setAcquisitions} 
            setArtworks={setArtworks}
            // onDeleteArtwork={onDeleteArtwork}
            // onUpdateArtwork={onUpdateArtwork}
            // onDeleteAcquisition={onDeleteAcquisition}
            />
      </div>
  );
}

export default Storage;