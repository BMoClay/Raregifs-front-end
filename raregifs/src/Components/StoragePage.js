import React, { useEffect, useState } from 'react';
import StorageList from './StorageList'

function StoragePage({ currentUser }) {
  
  const [currentUserAcquisitions, setCurrentUserAcquisitions] = useState([])
  const [currentUserArtworks, setCurrentUserArtworks] = useState([]) 
  const { id } = currentUser;

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}/acquisitions`)
        .then(r => r.json())
        .then(userAcquisitionsArray => {
            setCurrentUserAcquisitions(userAcquisitionsArray);
        })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}/artworks`)
        .then(r => r.json())
        .then(userArtworksArray => {
            setCurrentUserArtworks(userArtworksArray);
        })
  }, [])

  function handleDeleteAcquisition(id) {
    const updatedAcquisitionsArray = currentUserAcquisitions.filter((acquisition) => acquisition.id !== id);
    setCurrentUserAcquisitions(updatedAcquisitionsArray);
  } 

  function handleUpdateArtwork(updatedArtwork) {
    const updatedArtworksArray = currentUserArtworks.map((artwork) => {
      if (artwork.id === updatedArtwork.id) {
          return updatedArtwork;
      } else {
          return artwork;
      }
    })
    setCurrentUserArtworks(updatedArtworksArray);
  }

  function handleDeleteArtwork(id) {
    const updatedArtworksArray = currentUserArtworks.filter((artwork) => artwork.id !== id);
    setCurrentUserArtworks(updatedArtworksArray);
  }  

  return (
      <div className="storage" >
        <StorageList
           currentUser={currentUser}
           onDeleteAcquisition={handleDeleteAcquisition}
           currentUserArtworks={currentUserArtworks}
           onDeleteArtwork={handleDeleteArtwork}
           onUpdateArtwork={handleUpdateArtwork}
        />
      </div>
  );
}

export default StoragePage;