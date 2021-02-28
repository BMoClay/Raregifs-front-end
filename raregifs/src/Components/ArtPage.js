import React from 'react';
import ArtList from './ArtList';

  function ArtPage({ 
    currentUser, 
    artworks, 
    acquisitions, 
    setAcquisitions, 
    setArtworks, 
    onDeleteArtwork, 
    onUpdateArtwork,  
    onAcquireArtwork 
  }) {

  return (
      <div className="art-page" >
        <ArtList 
            acquisitions={acquisitions}
            currentUser={currentUser} 
            artworks={artworks}
            setAcquisitions={setAcquisitions} 
            setArtworks={setArtworks}
            onDeleteArtwork={onDeleteArtwork}
            onUpdateArtwork={onUpdateArtwork}
            onAcquireArtwork={onAcquireArtwork}
            />
      </div>
  );
}

export default ArtPage;